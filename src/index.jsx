// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = ()=>{
  let [f,sec]=React.useState('Click me')
  const on = ()=>{
    sec('HEllo back')
  }
  return (
    <div><button onClick={on}>{f}</button>
    </div>
  )


};

const a = document.getElementById('ap')
const root = ReactDOM.createRoot(a)
root.render(<App />)