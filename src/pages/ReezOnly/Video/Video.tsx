import {VideoCard} from "@/components/VideoCard/VideoCard";
import {Summary} from "@/pages/Summary/Summary";
import {useCallback, useMemo, useRef, useState} from "react";
import {InputSearchTimecodes} from "@/pages/ReezOnly/InputSearchTimecodes/InputSearchTimecodes";
import {playlistsAPI, videosAPI} from "@/api";
import YouTube, {YouTubeEvent, YouTubeProps} from "react-youtube";
import {Timecodes} from "@/pages/VideoPage/Timecodes/Timecodes";
import {VideoFragmentCard} from "@/components/Card/VideoFragmentCard";
import {useSearchParams} from "react-router-dom";

export const Video = () => {
  const [showVideoCard, setShowVideoCard] = useState(true);
  const [currentTime, setCurrentTime] = useState(null);
  const iframe = useRef<YouTube>(null);
  const iframeWrapper = useRef<HTMLDivElement>(null);
  const [params] = useSearchParams();
  const playlistId = "59609dd8-7ef4-4080-9cb8-3c2cab266494"
  const videoId = "5ec5bb33-9c1e-4295-8a82-ca36138da3cb"

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

  const getCurrentTimeFunc = async () => {
    setCurrentTime((await iframe.current?.internalPlayer.getCurrentTime()) || 0);
  };

  let timerId: number;
  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    if (event.data === 1) {
      timerId = setInterval(() => {
        getCurrentTimeFunc();
      }, 1000);
    } else if (event.data === 2) {
      clearInterval(timerId);
    }
  };

  const goToTimeFunc = (event: YouTubeEvent) => {
    const time = params.get('t') ?? 0;
    event.target.seekTo(time, true);
    event.target.playVideo();
  };

  const goToTime = (time: number) => {
    console.log("Переход к времени:", time);

    iframe.current?.internalPlayer.seekTo(time, true);
    iframeWrapper.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
  }


  const startsForm = useMemo(() => {
    const time = params.get('t');
    return time ? parseInt(time) : 0;
  }, [params]);

  return (
      <div className='w-[100vw] h-[100vh] bg-white-hover'>
        <div className='flex gap-[14px] w-full h-full bg-white p-[10px]'>
          <div>
            <div className='mb-[14px]'>
              <InputSearchTimecodes getSearch={getSearchVideosHandler}/>
            </div>
            {searchVideos && params.get('search') && (
                    <div
                        className='h-[469px] scroll-bar overflow-y-scroll w-[526px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[16px]'>
                      {searchVideos &&
                          searchVideos.map((fragment) =>
                              fragment.cues.map((cue, i) => {
                                if (fragment.publicId === video!.publicId) {
                                  return (
                                      <div className='cursor-pointer hover:bg-white-hover'>
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

            {!params.get('search') && <Timecodes setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>}
          </div>
          <div>
            <div className={`${showVideoCard ? 'mb-[14px]' : ''}`}>
              {showVideoCard && video && <VideoCard video={video}
                                                    onStateChange={onStateChange}
                                                    goToTimeFunc={goToTimeFunc}
                                                    iframe={iframe}
                                                    startsForm={startsForm}
                                                    setCurrentTime={setCurrentTime}
                                                    iframeClassName='w-[440px] h-[252px] rounded-[12px]'/>}
            </div>
            <Summary id={videoId} playlistId={playlistId} onChange={(value) => setShowVideoCard(value)}/>
          </div>
        </div>
      </div>
  );
};

