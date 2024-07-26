import AddIcon from '@mui/icons-material/Add';
import { Grid, IconButton, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../features/hook';
import { openModal } from '../../features/slices/modal';
import { CategoryT } from '../../types/calculator';
import Entry from '../Entry/Entry';
type CategoryColumnProps = {
	category: CategoryT;
	text: string;
};
const CategoryColumn = ({ category, text }: CategoryColumnProps) => {
	const entries = useAppSelector(store => store.calculator[category]);
	const dispatch = useAppDispatch();
	return (
		<Grid container>
			<Grid key={`category ${category}`} item xs={12}>
				<Typography variant='h5'>{text}</Typography>
			</Grid>
			{entries.map(entry => (
				<Grid
					sx={{ marginBottom: '10px', marginTop: '10px' }}
					item
					xs={12}
					key={entry.id}
				>
					<Entry entry={entry} />
				</Grid>
			))}
			<Grid key={`add ${category}`} item xs={12}>
				<IconButton
					aria-label='toggle password visibility'
					onClick={() => {
						dispatch(dispatch(openModal(category)));
					}}
					edge='end'
				>
					<AddIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default CategoryColumn;
