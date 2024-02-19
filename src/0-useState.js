import React, { useState } from 'react';

function UseStateExample() {

  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState('home');
  // const [index, setIndex] = useState( () => {
  //   // 使用函数，这里只运行一次
  //   return 1;
  // });

  function decrementCount() {
    setIndex(prevIndex => prevIndex-1)
    setTheme('red')
  }

  function increaseCount() {
    setIndex(prevIndex => prevIndex+1)
    setTheme('green')
  }
  
  // write a vertical scroll page

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{index} {theme}</span>
      <button onClick={increaseCount}>+</button>
    </>
  )
}

export default UseStateExample;