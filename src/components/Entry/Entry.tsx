import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { useAppDispatch } from '../../features/hook';
import {
	changeEntryValue,
	deleteEntry,
} from '../../features/slices/calculator';
import { EntryT } from '../../types/calculator';
type EntryProps = {
	entry: EntryT;
};

const Entry = ({ entry }: EntryProps) => {
	const dispatch = useAppDispatch();
	return (
		<>
			<InputLabel htmlFor='input-with-icon-adornment'>{entry.type}</InputLabel>
			<Input
				value={entry.value}
				name={entry.name}
				onChange={e => {
					const newValue = Number(e.target.value);
					if (Number.isNaN(newValue)) return;
					dispatch(changeEntryValue({ ...entry, value: newValue }));
				}}
				id='input-with-icon-adornment'
				endAdornment={
					<InputAdornment position='start'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={() => {
								dispatch(deleteEntry(entry.id));
							}}
							edge='end'
						>
							<CloseIcon />
						</IconButton>
					</InputAdornment>
				}
			/>
		</>
	);
};

export default Entry;
