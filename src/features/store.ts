import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculator';
import modalReducer from './slices/modal';
export const store = configureStore({
	reducer: {
		calculator: calculatorReducer,
		modal: modalReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
