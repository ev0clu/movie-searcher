'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import ContainerWrapper from '../ContainerWrapper';
import ErrorMessage from '../ErrorMessage';

type SearchbarProps = {
  searchData: (title: string) => void;
};

const Searchbar = ({ searchData }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (inputValue !== '') {
      setIsError(false);
    }
    setInputValue(e.target.value);
  };

  const handleSearchButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    searchHandler();
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && inputValue !== '') {
      searchHandler();
    }
  };

  const searchHandler = () => {
    if (inputValue === '') {
      setIsError(true);
    } else {
      setIsError(false);
      searchData(inputValue);
      setInputValue('');
    }
  };

  return (
    <ContainerWrapper className="h-32 flex-row items-center justify-center rounded-lg bg-yellow-500">
      <div className="relative mx-5">
        <div className="relative flex max-w-md items-center justify-center md:w-96">
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
            onClick={handleSearchButton}
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
        {isError && (
          <ErrorMessage className="absolute">
            Input field is required
          </ErrorMessage>
        )}
      </div>
    </ContainerWrapper>
  );
};

export default Searchbar;
