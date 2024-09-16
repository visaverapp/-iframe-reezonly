import image from './images/imageSearch.png'
import SearchIcon from "@/components/SVGIcons/SearchIcon";
import {useDebounce} from "@/hooks/useDebounce";
import {useSearchParams} from "react-router-dom";
import {useRef} from "react";

export const SearchStartPage = () => {
  const [params, setParams] = useSearchParams();
  // const navigate = useNavigate();
  const search = useRef<HTMLInputElement | null>(null);

  const makeSearch = useDebounce(() => {
    const data = search.current?.value || '';
    if (data) {
      setParams({search: data});
    } else {
      setParams('');
    }
  }, 500);

  const onSearch = () => {
    // const value = search.current?.value;
    // if (value) {
    //   navigate(`results?search=${value}`);
    // }
    makeSearch();
  };


  return (
      <div className='flex flex-col gap-[100px] mt-[10%] max-w-[900px]'>
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
        <div className='self-end'>
          <img src={image} alt="search-icon"/>
        </div>
      </div>
  );
};

