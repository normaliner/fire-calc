import { Grid } from '@mui/material';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../../features/hook';
import { changeMonth } from '../../features/slices/calculator';
import { MAX_MONTHS } from '../../utils/initCalculator';
import InvestmentsChart from './InvestmentsChart/InvestmentsChart';
import GrowthChart from './GrowthChart/GrowthChart'

const PlotsWrapper = () => {
	const months = useAppSelector(store => store.calculator.months);
	const dispatch = useAppDispatch();

	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<InvestmentsChart />
			</Grid>
			<Grid item xs={6}>
				<GrowthChart />
			</Grid>

			<Grid item xs={12}>
				<Stack spacing={2} direction='row' sx={{ m: 5 }} alignItems='center'>
					<Slider
						aria-label='Volume'
						value={months}
						onChange={(_, value) => {
							const newValue = Array.isArray(value) ? value[0] : value;
							if (Number.isNaN(newValue)) return;
							dispatch(changeMonth(newValue));
						}}
						marks={[
							{
								value: 0,
								label: '0',
							},
							{
								value: MAX_MONTHS,
								label: `${MAX_MONTHS}`,
							},
							{
								value: months,
								label: `${months}`,
							},
						]}
						max={MAX_MONTHS}
					/>
				</Stack>
			</Grid>
		</Grid>
	);
};
export default PlotsWrapper;
