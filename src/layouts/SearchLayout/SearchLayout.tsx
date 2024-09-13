import {SearchResultPage} from "@/pages/SearchResultPage/SearchResultPage";

export const SearchLayout = () => {

  return (
      <div className='w-[100vw] h-[100vh] bg-white-hover'>
        {/*<div className='fixed left-[20%] top-[-4%] mt-[10%]'>*/}
          <div className='flex flex-col gap-[14px] w-full h-full bg-white'>
            <SearchResultPage/>
          </div>
        {/*</div>*/}
      </div>
  );
};


