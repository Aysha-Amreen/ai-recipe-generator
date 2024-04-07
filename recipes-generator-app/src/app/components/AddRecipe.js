'use client'
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddRecipe = (props) => {
  const [userInput, setUserInput] = useState({
    enteredUsername: '',
    enteredAge: '',
    enteredImg: '',
    enteredMajor: ''
  });
  
  const changeHandler = (event) => {
    const {id, value} = event.target;

    setUserInput((prevState) => {
      return {
        ...prevState, 
        [id]: value, // Update the correct field based on the input's id
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Destructure the state object to get individual values
    const {enteredUsername, enteredAge, enteredImg, enteredMajor} = userInput;

    // Check if the username is not entered and alert the user if true
    if (enteredUsername.trim().length == 0) {
      alert('Please enter a username.'); // This line alerts the user
      return; // Stop the function from proceeding further
    }
    
    const userData = {
      username: enteredUsername,
      age: enteredAge,
      img: enteredImg,
      major: enteredMajor,
      id: uuidv4()
    };

    props.onAddUser(userData);

    console.log(userData);
    
    setUserInput({
      enteredUsername: '',
      enteredAge: '',
      enteredImg: '',
      enteredMajor: ''
    });
  };

  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          id="enteredUsername"
          type="text"
          value={userInput.enteredUsername}
          onChange={changeHandler}
        />
        <label>Age (Years)</label>
        <input
          id="enteredAge"
          type="number"
          min={1}
          step={1}
          max={100}
          value={userInput.enteredAge}
          onChange={changeHandler}
        />
        <label>Link to image</label>
         <input
          id="enteredImg"
          type="text"
          value={userInput.enteredImg}
          onChange={changeHandler}
        />
        <label>Major</label>
         <input
          id="enteredMajor"
          type="text"
          value={userInput.enteredMajor}
          onChange={changeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddRecipe;
