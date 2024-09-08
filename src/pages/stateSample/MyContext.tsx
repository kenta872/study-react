import React, { createContext, useState, ReactNode } from "react";

// コンテキストの型定義
interface MyContextType {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

// デフォルト値を指定
const defaultValue: MyContextType = {
  state: 0,
  setState: () => {}, // 初期値として無操作の関数を設定
};

// コンテキストを作成
export const MyContext = createContext<MyContextType>(defaultValue);

// コンテキストプロバイダーの型定義
interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<number>(0);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};
