import {VideoFragmentCardProps} from './VideoFragmentCard.props';

import {secondsToTime} from "@/pages/Search/utils";

export const VideoFragmentCard = ({
  fragment,
  goToTime,
}: VideoFragmentCardProps) => {

  const startsFrom = parseInt(fragment.timestampLink);

  const goToHandler = () => {
    goToTime?.(startsFrom);
  };

  return (
    <div onClick={goToHandler}>
      <div className='flex'>
        <span
            className='text-[#6F42C1] font-open-sans font-bold text-[14px] pr-[5px]'>{secondsToTime(startsFrom)}</span>
        {/*<span className='text-dark-blue font-open-sans font-bold text-[14px]'>Стратегии продвижения на рынке.</span>*/}
        <p className='text-dark-blue font-open-sans font-normal text-[14px]'
           dangerouslySetInnerHTML={{__html: fragment.content}}/>
      </div>
    </div>
  );
};
