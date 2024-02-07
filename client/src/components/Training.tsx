import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopping, removeTopping } from '../redux/pizzaSlice';
import { increment, decrement, reset } from '../redux/counterSlice';
import { RootState } from '../redux/store';
import Button from '@mui/material/Button';

const Training = () => {
  const pizza = useSelector((state: RootState) => state.pizza);
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch(); //to change the app's data, an action needs to be dispatched to the store, that could be accomplished with the useDispatch hook

  const [pizzaArray, setPizzaArray] = useState<string[]>(['pepperoni']);
  const [inputValue, setInputValue] = useState<string>('');
  const [counterino, setCounterino] = useState<number>(0);

  const addPizzaElement = (element: string) => {
    const newArray = [...pizzaArray, element];
    setPizzaArray(newArray);
  };

  const removeLastPizzaElement = () => {
    const newArray = pizzaArray.slice(0, -1);
    setPizzaArray(newArray);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const removeElement = (element: string): void => {
    const newArr = pizzaArray.filter((item) => item !== element); //filter aqui é usado para criar um novo array com todos os elementos que passem o teste (item => item !== element)
    setPizzaArray(newArr);
  };

  const incrementCounter = (counterino: number) => {
    const count = counterino + 1;
    setCounterino(count);
  };

  const decrementCounter = (counterino: number) => {
    const count = counterino - 1;
    setCounterino(count);
  };

  const resetCounter = () => {
    const count = 0;
    setCounterino(count);
  };

  return (
    <>
      <div className="row pt-4">
        <h1 className="text-center"> React Redux training </h1>
        <div className="row">
          <div className="col-6">
            <h1 className="p-5">Pizza example</h1>
            {pizza.toppings.map((topping: string) => (
              <div className="m-5" key={topping}>
                {' '}
                {topping}{' '}
              </div>
            ))}
            <Button
              onClick={() => dispatch(addTopping('pepperoni'))}
              variant="contained"
            >
              {' '}
              Add pepperoni
            </Button>
            <button
              onClick={() => dispatch(removeTopping(pizza.toppings.length - 1))}
              className="btn btn-outline-secondary m-5"
            >
              remove last item
            </button>
          </div>
          <div className="col-6">
            <h1 className="p-5">Counter example</h1>
            <div className="">{counter.count}</div>
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-outline-secondary m-5"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-outline-secondary m-5"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="btn btn-outline-secondary m-5"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="row pt-4">
        <h1 className="text-center">React hooks example</h1>
        <div className="col-6">
          <div className="pt-4">
            <div className="row">
              <div className="col-6">
                <h1 className="m-5">Pizza example</h1>
                {pizzaArray.map((element) => (
                  <div className="p-5">{element}</div>
                ))}
                <button
                  className="btn btn-outline-secondary m-5"
                  onClick={(): void => addPizzaElement('cheese')}
                >
                  add cheese
                </button>
                <button
                  onClick={removeLastPizzaElement}
                  className="btn btn-outline-secondary m-5"
                >
                  remove last item
                </button>
              </div>
            </div>
            <div className="row">
              <div className="p-5 col-6">
                <input
                  type="text"
                  placeholder="element"
                  onChange={handleChange}
                  value={inputValue}
                />
                <button onClick={() => addPizzaElement(inputValue)}>
                  add element
                </button>
                <button onClick={() => removeElement(inputValue)}>
                  remove element
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h1 className="p-5">Counter example</h1>
          <div className="">{counterino}</div>
          <button
            onClick={() => incrementCounter(counterino)}
            className="btn btn-outline-secondary m-5"
          >
            Increment
          </button>
          <button
            onClick={() => decrementCounter(counterino)}
            className="btn btn-outline-secondary m-5"
          >
            Decrement
          </button>
          <button
            onClick={() => resetCounter()}
            className="btn btn-outline-secondary m-5"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Training;
