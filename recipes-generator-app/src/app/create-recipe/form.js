'use client'
import { useState } from 'react';

const form = () => {
  const [enteredIngredient, setIngredient] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredSize, setSize] = useState('');
  const [enteredTime, setTime] = useState('');

  const ingredientChangeHandler = (event) => {
    setIngredient(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const sizeChangeHandler = (event) => {
    setSize(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      ingredient: enteredIngredient,
      amount: enteredAmount,
      servingSize: enteredSize,
      cookTime: enteredTime
    };

    props.onSaveExpenseData(formData);

    console.log(formData);
    setIngredient('');
    setAmount('');
    setSize('');
    setTime('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className=''>
        <div className=''>
          <label>Ingredient</label>
          <input
            type='text'
            value={enteredIngredient}
            onChange={ingredientChangeHandler}
          />
        </div>
        <div className=''>
          <label>Amount</label>
          <input
            type='number'
            min='0.25'
            step='0.25'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className=''>
          <label>Serving Size</label>
          <input
            type='number'
            min='1.0'
            step='1.0'
            value={enteredSize}
            onChange={sizeChangeHandler}
          />
        </div>
        <div className=''>
          <label>Total Cooking Time (in minutes)</label>
          <input
            type='number'
            min='1.0'
            step='1.0'
            value={enteredTime}
            onChange={timeChangeHandler}
          />
        </div>
      </div>
      <div className=''>
        <button type='submit'>Generate Recipe</button>
      </div>
    </form>
  );
}

export default form;