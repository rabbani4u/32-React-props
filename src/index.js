import React from 'react';
import ReactDOM from 'react-dom';


const fname = "Rabbani";
const lname = "Khan";
const age = 25;
const date = new Date();
const currentYear = date.getFullYear();

ReactDOM.render(
<div className='my-div'>
<p>Created by {fname} + " " + {lname}</p>
<p>copyright © {currentYear}</p>
</div>,
  document.getElementById('root')
  );

