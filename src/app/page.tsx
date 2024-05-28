import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex w-full flex-1 justify-center px-10 pb-10 md:px-24 md:pb-24">
      <div className="flex h-32 w-full max-w-4xl items-center justify-center bg-yellow-500">
        <div className="relative flex w-96 items-center justify-center">
          <input
            type="text"
            placeholder="Search for a movie"
            className="mx-5 h-10 w-full max-w-md rounded-lg border-none px-3 py-2 text-sm font-medium outline-none ring-0 ring-neutral-600 focus:ring-2"
          />
          <button className="absolute right-0 mr-5 flex h-9 w-9 items-center justify-center rounded-lg hover:bg-neutral-100">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
