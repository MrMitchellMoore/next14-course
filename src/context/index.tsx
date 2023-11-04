'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type DataType = {
  title: string;
  description: string;
};

interface ContextProps {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const AppContext = createContext<ContextProps>({
  data: [],
  setData: (): DataType[] => [],
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<[] | DataType[]>([
    {
      title: 'The amazing title',
      description: 'A lovely description',
    },
  ]);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
