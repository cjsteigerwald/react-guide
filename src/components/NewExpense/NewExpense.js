import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-expense'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expence</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	); // return
};

export default NewExpense;
