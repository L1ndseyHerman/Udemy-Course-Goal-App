import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')};
}

& input {
  display: block;
  width: 100%;
  /* This is a conditional thingie in styled components. Gets all the props like "invalid". */
  border: 1px solid ${props => (props.invalid ? 'red': '#ccc')};
  background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0)
    {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //  Trim is a JS method that removes excess whitespace.
    if (enteredValue.trim().length === 0)
    {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  //className={!isValid && 'invalid'}
//  && only returns the thing after it if the thing before it is true, otherwise returns nothing.
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
