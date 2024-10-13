// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// const App = () => <h1>Our First Test</h1>;

const App = () => {
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
