import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext } from "react";
import { useDataChange } from "hooks/useDataChange";

type UserDataTypes = {
  name: string;
  participant_number: string;
  classes: string;
  description: string;
};

type GlobalContext = {
  numberTestStudent: number;
  result: UserDataTypes;
  setNumberTestStudent: (value: any) => void;
  setStudentResultData: (value: any) => void;
};

export const DataContext = createContext<GlobalContext>({
  numberTestStudent: 0,
  result: { name: "", participant_number: "", classes: "", description: "" },
  setNumberTestStudent: () => {},
  setStudentResultData: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const changeDataContext = useDataChange();
  return (
    <DataContext.Provider value={changeDataContext}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}
