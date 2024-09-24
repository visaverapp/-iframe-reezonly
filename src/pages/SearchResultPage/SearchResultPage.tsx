import {Tabs} from "@/components/Tabs/Tabs";
import {Toggle} from '@/components/Toggle/Toggle';
import {useEffect, useRef, useState} from "react";
import {
  ResultVideoInnerWithScreenShot
} from "@/pages/Search/components/ResultVideoInnerWithScreenShot/ResultVideoInnerWithScreenShot";
import {SearchVideoCard} from "@/pages/SearchResultPage/SearchVideoCard";
import {playlistsAPI} from "@/api";
import {useDebounce} from "@/hooks/useDebounce";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import backIcon from "@/components/SVGIcons/BackIcon.svg";
import SearchIcon from "@/components/SVGIcons/SearchIcon";
import {FragmentPlayIconSuggetions} from "@/components/SVGIcons/FragmentPlayIconSuggetions";
import {PlayIconSuggetions} from "@/components/SVGIcons/PlayIconSuggetions";

export type SearchInputPropsType = {
  startSearchPageSettings?: {
    inputWidth: string,
    suggetionsPosition: string
    navigatePath: string
  }
}

export const SearchResultPage = ({startSearchPageSettings}: SearchInputPropsType) => {
  const [params, setParams] = useSearchParams();
  const [isChecked] = useState(false)
  const [activeTab, setActiveTab] = useState(0);
  const search = useRef<HTMLInputElement | null>(null);
  const [toggleActive, setToggleActive] = useState(false);
  const [suggetions, setSuggetions] = useState<any[]>([])
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const {data: playlists} = playlistsAPI.useGetMyPlaylistsQuery({})
  const videos = playlists?.results[0].videos

  const {data: videoWithFragment} = playlistsAPI.useGetFullSearchQuery({
    publicId: "59609dd8-7ef4-4080-9cb8-3c2cab266494",
    query: search.current?.value || params.get("search") || ""
  });

  useEffect(() => {
    if (videoWithFragment) {
      const suggetionsFragment = videoWithFragment.map(fragment => (
          {
            fragmentText: fragment.cues[0].content,
            videoTitle: videoWithFragment.map(item => item.title)
          }
      ))
      const suggetionsVideo = videoWithFragment.map(item => item.description)
      const suggetionsList = [...suggetionsFragment, ...suggetionsVideo]
      setSuggetions(suggetionsList)
    }
  }, [videoWithFragment])

  const searchItemCountAll = `${videos && videoWithFragment ? videos.length + videoWithFragment.length : ''}`
  const tabs = [`Все (${searchItemCountAll})`, `Фрагменты (${videoWithFragment?.length})`, `Видео (${videos?.length})`]

  const makeSearch = useDebounce(() => {
    const data = search.current?.value || '';
    if (data) {
      setParams({search: data});
    } else {
      setParams({});
    }
  }, 500);

  const onSearch = () => {
    setOpen(true)
    makeSearch();
  };

  const pickSuggestion = () => {
    if (startSearchPageSettings) {
      navigate(`${startSearchPageSettings.navigatePath}`);
    } else {
      navigate(`/`);
    }
  };

  return (
      <div>
        <div className='flex gap-[5px] pl-[7px] pb-[12px]'>
          <Link to={'/'}>
            <button
                className='hover:bg-white-hover pl-3 w-[45px] h-[40px] rounded-[9px] border-[#EDEFF3] border-[1px]'>
              <img src={backIcon} alt="backIcon"/>
            </button>
          </Link>
          <div className='relative'>
            <input
                type="text"
                ref={search}
                onChange={onSearch}
                defaultValue={params.get('search') ?? ''}
                placeholder='Что ищем в этом курсе?'
                className='w-[904px] h-[40px] focus:outline-none self-end pl-[16px] pr-[45px] pt-[7px] pb-[10px] border-[#8492A6] border-[1px] rounded-[9px] text-[16px] text-dark-blue'
            />
            <div className='absolute right-[2%] top-[20%]'>
              <SearchIcon/>
            </div>
          </div>

          {suggetions.length > 0 && open && params.get('search') && (
              <div
                  className={`${startSearchPageSettings?.suggetionsPosition ? startSearchPageSettings.suggetionsPosition : 'top-[46px] left-[55px] w-[904px]'} absolute z-[10] max-h-[312px] bg-white border border-[#8492A6] rounded-[10px] p-[2px]`}>
                <ul className='max-h-[290px] flex-col overflow-y-scroll scroll-bar'>
                  {suggetions.map(item => {
                    return (
                        <>
                          {item.content &&
                              <li onClick={pickSuggestion}
                                  className='gap-1 px-[12px] py-[8px] cursor-pointer hover:bg-white-hover flex pb-1'>
                                  <PlayIconSuggetions/>
                                  <span
                                      className='text-dark-blue text-[16px] font-normal font-open-sans pb-[3px]'>{item.content}</span>
                              </li>
                          }
                        </>
                    )
                  })}
                  {suggetions.map(fragment => {
                    console.log(fragment.videoTitle)
                    return (
                        <>
                          {fragment.fragmentText &&
                              <li onClick={pickSuggestion}
                                  className='gap-1 px-[12px] py-[8px] cursor-pointer hover:bg-white-hover flex'>
                                  <FragmentPlayIconSuggetions/>
                                  <div className='flex-col gap-1.5'>
                                    <span
                                        dangerouslySetInnerHTML={{__html: highlightTextSearchPage(fragment.fragmentText, search.current!.value)}}
                                        className='text-dark-blue text-[16px] font-normal font-open-sans pb-[3px]'></span>
                                      <div className='flex items-center'>
                                          <PlayIconSuggetions/>
                                          <span className='text-[#6A6A77] text-[14px] font-normal font-open-sans'>Система. ПРО Бизнес</span>
                                      </div>
                                  </div>
                              </li>
                          }
                        </>
                    )
                  })}
                </ul>
              </div>
          )}

        </div>
        <div className='w-[97%]'>
          <div className='max-w-max pl-[9px]'>
            <Toggle title='Искать по точному совпадению' checked={isChecked}
                    onChange={() => setToggleActive(prevState => !prevState)}/>
          </div>
          <Tabs tabsLabel={tabs} activeTab={activeTab} onChange={(index: number) => setActiveTab(index)}/>
        </div>
        <div className='relative flex flex-col h-[412px] scroll-bar overflow-y-scroll'>
          {activeTab === 0 ?
              <div>
                {!toggleActive && videos && videos.map(video => <SearchVideoCard key={video.publicId}
                                                                                 video={video}/>)}
                {toggleActive && !params.get('search') && videos?.map(video => <SearchVideoCard key={video.publicId}
                                                                                                video={video}/>)}
                <ResultVideoInnerWithScreenShot search={search}/>
              </div>
              :
              activeTab === 1 ? <ResultVideoInnerWithScreenShot search={search}/>
                  : activeTab === 2 ? <>{videos && videos?.map(video => <SearchVideoCard key={video.publicId}
                                                                                         video={video}/>)}</>
                      : <></>
          }
        </div>
      </div>
  );
};

export const highlightTextSearchPage = (text: string, search: string) => {
  const regex = new RegExp(`(${search})`, 'gi');
  return text.replace(regex, '<span class="color-highlightText">$1</span>');
};