import { Container, Grid, Typography } from '@mui/material';
import AddEntryModal from './components/AddEntryModal/AddEntryModal';
import CategoryColumn from './components/CategoryColumn/CategoryColumn';
import Entry from './components/Entry/Entry';
import PlotsWrapper from './components/Plots/PlotsWrapper';
import { useAppSelector } from './features/hook';
import { CATEGORIES_WITH_TEXT } from './types/calculator';
function App() {
	const entry = useAppSelector(store => store.calculator.remaining);
	return (
		<Container sx={{marginTop: 5}}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<PlotsWrapper />
				</Grid>
			</Grid>
			<Grid container spacing={10} sx={{marginTop: 5}}>
				{CATEGORIES_WITH_TEXT.map(category => (
					<Grid key={category.value} item xs={4}>
						<CategoryColumn category={category.value} text={category.text} />
					</Grid>
				))}

				<Grid key='remaning' item xs={4}>
					<Grid container>
						<Grid key='category remaning' item xs={12}>
							<Typography variant='h5'>Остаток</Typography>
						</Grid>
						<Grid item xs={12} key={entry.id}>
							<Entry entry={entry} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<AddEntryModal />
		</Container>
	);
}

export default App;
