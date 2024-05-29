'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import ContainerWrapper from '../ContainerWrapper';

type SearchbarProps = {
  searchData: (title: string) => void;
};

const Searchbar = ({ searchData }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    searchData(inputValue);
    setInputValue('');
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && inputValue !== '') {
      searchData(inputValue);
      setInputValue('');
    }
  };

  return (
    <ContainerWrapper className="h-32 flex-row items-center justify-center bg-yellow-500">
      <div className="relative mx-5 flex w-96 items-center justify-center">
        <input
          className="h-10 w-full max-w-md rounded-lg border-none px-3 py-2 text-sm font-medium outline-none ring-0 ring-neutral-600 focus:ring-2"
          type="text"
          placeholder="Search for a movie"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button
          className="absolute right-0 flex h-9 w-9 items-center justify-center rounded-lg hover:bg-neutral-100"
          onClick={handleSearch}
        >
          <Search className="h-6 w-6" />
        </button>
      </div>
    </ContainerWrapper>
  );
};

export default Searchbar;