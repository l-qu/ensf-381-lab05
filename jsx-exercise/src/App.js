import React from 'react';
import './App.css';
import Controls from './controls.js';
import UserList from './UserList.js';
import Footer from './Footer.js';

function App() {
  const currentYear = new Date().getFullYear();
  let isLoggedIn = true;
  const jsxElement = <div>
    <h1>ENSF-381: Full Stack Web Development</h1>
    {/* <p>React Components</p>
    <p>Current Year: {currentYear}</p>  
    {isLoggedIn ? (<p>Welcome back!</p>) : (<p>Please log in.</p>)} */}
    {isLoggedIn ? <div>
      <section>
        <Controls />
      </section>
      <section>
        User List: <UserList />
      </section>
      <Footer />
    </div> : <p>Please log in</p>}
  </div>
  return (
    <div className="App">
      <header className="App-header">
        {jsxElement}
      </header>
    </div>
  );
}

export default App;
