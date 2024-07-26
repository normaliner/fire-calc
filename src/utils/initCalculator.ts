import { v4 as uuidv4 } from 'uuid';
import { CalculatorT } from '../types/calculator';

const income = [
	{
		id: uuidv4(),
		name: 'Zarplata',
		value: 150000,
		type: 'Зарплата',
	},
	{
		id: uuidv4(),
		name: 'Podrabotka',
		value: 50000,
		type: 'Подработка',
	},
];

const fixedExpenses = [
	{
		id: uuidv4(),
		name: 'Ipoteka',
		value: 50000,
		type: 'Ипотека',
	},
	{
		id: uuidv4(),
		name: 'Podpiski',
		value: 5000,
		type: 'Подписки',
	},
];

const savings = [
	{
		id: uuidv4(),
		name: 'Sberezheniya',
		value: 10000,
		type: 'Сбережения',
	},
];

const investments = [
	{
		id: uuidv4(),
		name: 'Pokupka akciy',
		value: 100000,
		type: 'Покупка акций',
	},
];

const inflatingExpenses = [
	{
		id: uuidv4(),
		name: 'Prodykty',
		value: 22000,
		type: 'Продукты',
	},
	{
		id: uuidv4(),
		name: 'Fitnes',
		value: 7000,
		type: 'Фитнес',
	},
];
export const MAX_MONTHS = 360;
export const initCalculator: CalculatorT = {
	income,
	fixedExpenses,
	inflatingExpenses,
	savings,
	investments,
	remaining: {
		id: uuidv4(),
		name: 'remaining',
		value: 150000 + 50000 - 50000 - 5000 - 10000 - 100000 - 22000 - 7000,
		type: 'Остаток',
	},
	months: MAX_MONTHS,
	annualInflationRate: 0.12,
	annualInvestmentRate: 0.15,
	annualIncomeIncrease: 0.05,
};
