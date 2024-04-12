import React, { createContext, useState} from "react";


interface AppContextType {
  isSelectedButton: boolean;
  setIsSelectedButton: (value: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  isSelectedButton: false,
  setIsSelectedButton: () => {},
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSelectedButton, setIsSelectedButton] = useState(false);


  return (
    <AppContext.Provider value={{ isSelectedButton, setIsSelectedButton }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
