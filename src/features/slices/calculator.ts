import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { transliterate as tr } from 'transliteration';
import { v4 as uuidv4 } from 'uuid';
import { CATEGORIES, EntryT, keyIsArrayCategory } from '../../types/calculator';
import { calculatorRemaning } from '../../utils/calculateRemaing';
import { initCalculator } from '../../utils/initCalculator';

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: initCalculator,
	reducers: {
		addEntry: (
			state,
			action: PayloadAction<{ category: string; type: string }>
		) => {
			const { category, type } = action.payload;
			if (!keyIsArrayCategory(category)) return;
			state[category].push({
				id: uuidv4(),
				type,
				name: tr(type),
				value: 0,
			});
			state.remaining.value = calculatorRemaning(state);
		},
		deleteEntry: (state, action: PayloadAction<EntryT['id']>) => {
			for (const category of CATEGORIES) {
				const targetIndex = state[category].findIndex(
					entry => entry.id === action.payload
				);
				if (targetIndex !== -1) {
					state[category].splice(targetIndex, 1);
					break;
				}
			}
			state.remaining.value = calculatorRemaning(state);
		},
		changeEntryValue: (state, action: PayloadAction<EntryT>) => {
			const { id, value } = action.payload;
			for (const category of CATEGORIES) {
				const targetEntry = state[category].find(entry => entry.id === id);
				if (targetEntry) {
					targetEntry.value = value;
					break;
				}
			}
			state.remaining.value = calculatorRemaning(state);
		},
		changeMonth: (state, action: PayloadAction<number>) => {
			state.months = action.payload;
		},
	},
});

export const { addEntry, deleteEntry, changeEntryValue,changeMonth } =
	calculatorSlice.actions;

export default calculatorSlice.reducer;
