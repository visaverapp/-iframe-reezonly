import {VideoCard} from "@/components/VideoCard/VideoCard";
import {Summary} from "@/pages/Summary/Summary";
import {useCallback, useRef, useState} from "react";
import {InputSearchTimecodes} from "@/pages/ReezOnly/InputSearchTimecodes/InputSearchTimecodes";
import {playlistsAPI, videosAPI} from "@/api";
import YouTube from "react-youtube";
import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import {VideoFragmentCard} from "@/components/Card/VideoFragmentCard";
import {useSearchParams} from "react-router-dom";

export const Video = () => {
  const [currentTime] = useState(null);
  const [showVideoCard, setShowVideoCard] = useState(true);
  const iframe = useRef<YouTube>(null);
  const iframeWrapper = useRef<HTMLDivElement>(null);
  const vkRef = useRef<HTMLIFrameElement>(null);
  const [param] = useSearchParams();
  const playlistId = "59609dd8-7ef4-4080-9cb8-3c2cab266494"
  const videoId = "5ec5bb33-9c1e-4295-8a82-ca36138da3cb"
  // const [filteredTimecodes, setFilteredTimecodes] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  const {
    data: video,
  } = videosAPI.useGetMovieByIdQuery({id: videoId ?? ''});

  const [getSearchVideos, {data: searchVideos}] =
      playlistsAPI.useLazyGetFullSearchQuery();  //получили все видео плейлиста


  const getSearchVideosHandler = useCallback(
      async (query: string) => {
        await getSearchVideos({query, publicId: playlistId || ''});
      },
      [playlistId],
  );

  // const filterTimecodes = (timecodes: any) => {
  //   if (!searchQuery) return timecodes; // Если нет запроса, вернуть все таймкоды
  //   return timecodes.filter(tc =>
  //       tc.text.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };
  //
  // useEffect(() => {
  //    if (searchVideos) {
  //     const filtered = filterTimecodes(searchVideos);
  //     setFilteredTimecodes(filtered);
  //   }
  // }, [searchVideos, searchQuery]);

  const goToTime = useCallback(
      (time: number) => {
        if (video && video.source === 'VK' && vkRef.current) {
          // TODO разобраться с типизацией
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const player = window.VK.VideoPlayer(vkRef.current);
          player.seek(time);

          iframeWrapper.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
          return;
        }

        iframe.current?.internalPlayer.seekTo(time, true);
        iframeWrapper.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
      },
      [video],
  );

  return (
      <div className='w-[100vw] h-[100vh] bg-white-hover'>
        <div className='flex gap-[14px] w-full h-full bg-white p-[10px]'>
          <div>
            <div className='mb-[14px]'>
              <InputSearchTimecodes getSearch={getSearchVideosHandler}/>
            </div>
            {searchVideos && param.get('search') && (
                    <div
                        className='h-[469px] scroll-bar overflow-y-scroll w-[526px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[16px]'>
                      {searchVideos &&
                          searchVideos.map((fragment) =>
                              fragment.cues.map((cue, i) => {
                                if (fragment.publicId === video!.publicId) {
                                  return (
                                      //       <Timecodes key={fragment.publicId} setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>
                                      <div className='cursor-pointer'>
                                        <VideoFragmentCard
                                            fragment={cue}
                                            key={fragment.publicId + i}
                                            goToTime={goToTime}
                                            videoPreview={fragment.thumbnailUrl}
                                        />
                                      </div>
                                  );
                                }
                              }),
                          )}
                    </div>
                )}

            {!param.get('search') && <Timecodes setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>}
          </div>
          <div>
            <div className={`${showVideoCard ? 'mb-[14px]' : ''}`}>
              {showVideoCard && video && <VideoCard setCurrentTime={() => {
              }} video={video} iframeClassName='w-[440px] h-[252px] rounded-[12px]'/>}
            </div>
            <Summary id={videoId} playlistId={playlistId} onChange={(value) => setShowVideoCard(value)}/>
          </div>
        </div>
      </div>
  );
};

