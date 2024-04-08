'use client'
import { useState, useEffect } from 'react';

const AddRecipe = () => {
  const [formRows, setFormRows] = useState([{ id: 1 }]);

  useEffect(() => {
    console.log("formRows: ", formRows);
  });

  const [enteredIngredient1, setIngredient1] = useState('');
  const [enteredIngredient2, setIngredient2] = useState('');
  const [enteredIngredient3, setIngredient3] = useState('');
  const [enteredIngredient4, setIngredient4] = useState('');
  const [enteredAmount1, setAmount1] = useState('');
  const [enteredAmount2, setAmount2] = useState('');
  const [enteredAmount3, setAmount3] = useState('');
  const [enteredAmount4, setAmount4] = useState('');
  const [enteredSize, setSize] = useState('');
  const [enteredTime, setTime] = useState('');

  const ingredient1ChangeHandler = (event) => {
    setIngredient1(event.target.value);
  };
  const ingredient2ChangeHandler = (event) => {
    setIngredient2(event.target.value);
  };
  const ingredient3ChangeHandler = (event) => {
    setIngredient3(event.target.value);
  };
  const ingredient4ChangeHandler = (event) => {
    setIngredient4(event.target.value);
  };
  const amount1ChangeHandler = (event) => {
    setAmount1(event.target.value);
  };
  const amount2ChangeHandler = (event) => {
    setAmount2(event.target.value);
  };
  const amount3ChangeHandler = (event) => {
    setAmount3(event.target.value);
  };
  const amount4ChangeHandler = (event) => {
    setAmount4(event.target.value);
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
      ingredient1: enteredIngredient1,
      amount1: enteredAmount1,
      ingredient2: enteredIngredient2,
      amount2: enteredAmount2,
      ingredient3: enteredIngredient3,
      amount3: enteredAmount3,
      ingredient4: enteredIngredient4,
      amount4: enteredAmount4,
      servingSize: enteredSize,
      cookTime: enteredTime
    };

    console.log(formData);
    setIngredient1('');
    setIngredient2('');
    setIngredient3('');
    setIngredient4('');
    setAmount1('');
    setAmount2('');
    setAmount3('');
    setAmount4('');
    setSize('');
    setTime('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=''>
        {/*{formRows.map((row) => (
          <div className=''>
            <label>Ingredient: </label>
            <input
              type='text'
              value={enteredIngredient}
              onChange={ingredientChangeHandler}
            />
            <label> Amount: </label>
            <input
              type='number'
              min='0.25'
              step='0.25'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
            <button
              onClick={() =>
                setFormRows(formRows.filter((fr) => fr.id !== row.id))
              }
            >
              remove
            </button>
          </div>
        ))}
        <button
          onClick={() => setFormRows([...formRows, { id: formRows.length + 1 }])}
        >
          add
            </button>*/}

        <div className=''>
          <label>Ingredient: </label>
          <input
            type='text'
            value={enteredIngredient1}
            onChange={ingredient1ChangeHandler}
          />
          <label> Amount: </label>
          <input
            type='number'
            min='0.25'
            step='0.25'
            value={enteredAmount1}
            onChange={amount1ChangeHandler}
          />
        </div>
        <div className=''>
          <label>Ingredient: </label>
          <input
            type='text'
            value={enteredIngredient2}
            onChange={ingredient2ChangeHandler}
          />
          <label> Amount: </label>
          <input
            type='number'
            min='0.25'
            step='0.25'
            value={enteredAmount2}
            onChange={amount2ChangeHandler}
          />
        </div>
        <div className=''>
          <label>Ingredient: </label>
          <input
            type='text'
            value={enteredIngredient3}
            onChange={ingredient3ChangeHandler}
          />
          <label> Amount: </label>
          <input
            type='number'
            min='0.25'
            step='0.25'
            value={enteredAmount3}
            onChange={amount3ChangeHandler}
          />
        </div>
        <div className=''>
          <label>Ingredient: </label>
          <input
            type='text'
            value={enteredIngredient4}
            onChange={ingredient4ChangeHandler}
          />
          <label> Amount: </label>
          <input
            type='number'
            min='0.25'
            step='0.25'
            value={enteredAmount4}
            onChange={amount4ChangeHandler}
          />
        </div>

        <div className=''>
          <label>Serving Size: </label>
          <input
            type='number'
            min='1.0'
            step='1.0'
            value={enteredSize}
            onChange={sizeChangeHandler}
          />
        </div>
        <div className=''>
          <label>Total Cooking Time (in minutes): </label>
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

export default AddRecipe;