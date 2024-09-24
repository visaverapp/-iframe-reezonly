import image from './images/imageSearch.png'
import SearchIcon from "@/components/SVGIcons/SearchIcon";
import {useDebounce} from "@/hooks/useDebounce";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {playlistsAPI} from "@/api";
import {PlayIconSuggetions} from "@/components/SVGIcons/PlayIconSuggetions";
import {FragmentPlayIconSuggetions} from "@/components/SVGIcons/FragmentPlayIconSuggetions";

export const SearchStartPage = () => {

  const [params, setParams] = useSearchParams();
  const [suggetions, setSuggetions] = useState<any[]>([])
  const search = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const playlistId = "59609dd8-7ef4-4080-9cb8-3c2cab266494"

  const {data: video} = playlistsAPI.useGetFullSearchQuery({
    publicId: playlistId,
    query: search.current?.value || params.get("search") || ""
  });

  useEffect(() => {
    if (video) {
      const suggetionsFragment = video.map(fragment => (
          {
            fragmentText: fragment.cues[0].content,
            videoTitle: video.map(item => item.title)
          }
      ))
      const suggetionsVideo = video.map(item => item.description)
      const suggetionsList = [...suggetionsFragment, ...suggetionsVideo]
      setSuggetions(suggetionsList)
    }
  }, [video])

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
      navigate('/search');
  };

  return (
      <div className='flex flex-col gap-[100px] pt-[73px] max-w-[900px]'>
        <div className='relative'>
          <input
              type="text"
              ref={search}
              onChange={onSearch}
              defaultValue={params.get('search') ?? ''}
              placeholder='Что ищем в этом курсе?'
              className='w-[915px] h-[40px] focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[10px] border-[#EDEFF3] border-[1px] rounded-[9px] text-[16px] text-dark-blue'
          />
          <div className='absolute right-[0%] top-[20%]'>
            <SearchIcon/>
          </div>
        </div>

        {suggetions.length > 0 && open && params.get('search') && (
            <div
                className={`w-[915px] absolute top-[21%] z-[10] max-h-[312px] bg-white border border-[#8492A6] rounded-[10px] p-[2px]`}>
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
                  return (
                      <>
                        {fragment.fragmentText &&
                            <li onClick={pickSuggestion}
                                className='gap-1 px-[12px] py-[8px] cursor-pointer hover:bg-white-hover flex'>
                                <FragmentPlayIconSuggetions/>
                                <div className='flex-col gap-1.5'>
                                    <span
                                        dangerouslySetInnerHTML={{__html: highlight(fragment.fragmentText, search.current!.value)}}
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

        <div className='self-end'>
          <img src={image} alt="search-icon"/>
        </div>
      </div>
  );
};

const highlight = (text: string, search: string) => {
  const regex = new RegExp(`(${search})`, 'gi');
  return text.replace(regex, '<b class="color-highlightText">$1</b>');
};

