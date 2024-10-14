import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";


const App = () => {

  useEffect(() => {
    const logSomething = () => {
      console.log(`This should be logged in the console`);
    };
  
    logSomething();
  })

  return (
    <section>
      <h1 role="heading">Our First Test</h1>
      <form action="/">
        <label htmlFor="username">Username:</label>
        <input role="usernameInput" type="text" name="username" />
      </form>
    </section>
  );
};

export default App;
