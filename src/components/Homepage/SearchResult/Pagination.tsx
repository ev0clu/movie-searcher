import { ArrowLeft, ArrowRight } from 'lucide-react';

type PaginationProps = {
  page: number;
  previousPage: () => void;
  nextPage: () => void;
  totalPages: number;
};

const Pagination = ({
  page,
  previousPage,
  nextPage,
  totalPages
}: PaginationProps) => {
  return (
    <div className="mx-5 flex flex-row items-center justify-center gap-8">
      <button
        className={`flex h-10 w-28 flex-row items-center justify-center gap-2 rounded-md border-[1px] border-stone-700 bg-black p-1 font-semibold text-white ${page === 1 ? 'cursor-default bg-opacity-30' : 'hover:cursor-pointer hover:bg-opacity-80'}`}
        disabled={page === 1}
        onClick={previousPage}
      >
        <ArrowLeft className="h-5 w-5" strokeWidth="3" />{' '}
        <span className="hidden md:inline">Previous</span>
      </button>
      <span className="text-lg font-semibold text-stone-700">
        {page}/{totalPages}
      </span>
      <button
        className={`flex h-10 w-28 flex-row items-center justify-center gap-2 rounded-md border-[1px] border-stone-700 bg-black p-1 font-semibold text-white ${page === totalPages ? 'cursor-default bg-opacity-30' : 'hover:cursor-pointer hover:bg-opacity-80'}`}
        disabled={page === totalPages}
        onClick={nextPage}
      >
        <span className="hidden md:inline">Next</span>
        <ArrowRight className="h-5 w-5" strokeWidth="3" />
      </button>
    </div>
  );
};

export default Pagination;
