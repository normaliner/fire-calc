import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../features/hook';
import { addEntry } from '../../features/slices/calculator';
import { closeModal } from '../../features/slices/modal';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const AddEntryModal = () => {
	const { open, category } = useAppSelector(root => root.modal);
	const dispatch = useAppDispatch();
	const [value, setValue] = useState('');

	const handleClose = () => dispatch(closeModal(category));

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<form
					onSubmit={e => {
						e.preventDefault();
						dispatch(addEntry({ category, type: value }));
						handleClose();
						setValue('');
					}}
				>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Добавить в категорию {category}
					</Typography>
					<TextField
						id='outlined-basic'
						label='Укажи название'
						variant='outlined'
						value={value}
						onChange={e => setValue(e.target.value)}
						autoFocus
					/>
					<Button type='submit' variant='outlined'>
						Добавить
					</Button>
				</form>
			</Box>
		</Modal>
	);
};

export default AddEntryModal;
