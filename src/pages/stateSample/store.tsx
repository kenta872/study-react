import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// ストアの初期状態の型定義
interface CounterState {
  value: number;
}

// 初期状態
const initialState: CounterState = {
  value: 0,
};

// スライスの定義
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// ストアの作成
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// アクションクリエーターのエクスポート
export const { increment, decrement, setValue } = counterSlice.actions;

// ストアの型定義
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
