'use client';

import { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

type ReactQueryClientProviderProps = {
  children: ReactNode;
};

const ReactQueryClientProvider = ({
  children
}: ReactQueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
