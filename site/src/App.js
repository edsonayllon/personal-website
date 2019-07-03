import React from 'react';
import logo from './logo.svg';
import headshot from './assets/headshot2.png';

import './App.css';

//https://colorhunt.co/palette/42533

function App() {
  return (
    <div className="App">
      <nav style={{ height: 100, backgroundColor: "#7ac7c4"}}> </nav>
      <header className="App-header">
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: 400, padding: 50}}>
            <h1>Put marketing here</h1>
            <p>
              A detailed description here.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a
              className="Button"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messege &#8594;
        </a>
        </div>
        <img src={headshot} style={{ width: 500 }} />
        </div>
      </header>
      <section className="dark-section">

        <h2>text</h2>

        <p>More text</p>

      </section>
    </div>
  );
}

export default App;
