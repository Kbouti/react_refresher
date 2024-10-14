import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const logSomething = () => {
      console.log(`This should be logged in the console`);
    };
    logSomething();
  }, []);

  return (
    <section>
      <h1 role="heading">Testing page</h1>
      <form action="/">
        <label htmlFor="username">Username:</label>
        <input role="usernameInput" type="text" name="username" />
      </form>
    </section>
  );
};

export default App;
