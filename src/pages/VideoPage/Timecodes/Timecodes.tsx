import {memo, useState} from "react";
import {useGetTimecodesQuery} from "@/api";
import {secondsToTime} from "@/pages/Search/utils";
import FullScreenLoader from "@/components/FullScreenLoader/FullScreenLoader";

interface TimecodesProps {
  setTime: (time: number) => void;
  playlistId: string;
  id: string;
  currentTime: number | null;
}

export const Timecodes = memo(({setTime, playlistId, id, currentTime}: TimecodesProps) => {
  const [showTextIndex, setShowTextIndex] = useState(null)
  // const [isCollapsed, setIsCollapsed] = useState(false)

  const {data, isLoading} = useGetTimecodesQuery({playlistId: playlistId, videoPublicId: id});

  const timings = data?.map((array) => array.start) || [];

  const highlightChapter = (i: number) => {
    return currentTime != null && currentTime >= timings[i] && (timings[i + 1] === undefined || currentTime < timings[i + 1]);
  };

  const toggleText = (index: any) => {
    setShowTextIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // const onReadMoreClick = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
      <div
          className='h-[469px] w-[526px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[3px]'>
        {isLoading && <FullScreenLoader/>}
        {data && (
            <ol className='scroll-bar overflow-y-scroll h-[459px]'>
              {data.map(({start, text, title}, i) => (
                  <li onClick={() => setTime(start)} className={`${highlightChapter(i) ? 'bg-[#E5E9F2]' : 'bg-white'} cursor-pointer rounded-[12px] pb-[8px] px-[8px]`} key={i}>
                    <div>
                      <span
                          className='text-[#6F42C1] font-open-sans font-bold text-[14px] pr-[5px]'>{secondsToTime(start)}</span>
                      <span className='text-dark-blue font-open-sans font-bold text-[14px]'>{title}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span
                          className='text-indigo font-open-sans font-normal text-[14px]'>
                        {showTextIndex === i ? text : text.slice(0, 59) + '...'}
                      </span>
                      <span onClick={() => toggleText(i)}
                            className='self-end cursor-pointer text-[#6F42C1] font-open-sans font-normal text-[14px]'>
                        {showTextIndex === i ? 'Свернуть' : '...ещё'}
                      </span>
                    </div>
                  </li>
              ))}
            </ol>
        )}
        {/*<div className='flex justify-end'>*/}
        {/*  <span className='cursor-pointer text-[#6F42C1] font-open-sans font-normal text-[14px]'*/}
        {/*        onClick={onReadMoreClick}>*/}
        {/*    {isCollapsed ? 'Развернуть' : 'Свернуть'}*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>
  );
});

Timecodes.displayName = 'Timecodes';
