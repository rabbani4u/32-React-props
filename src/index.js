import React from 'react';
import ReactDOM from 'react-dom';


const fname = "Rabbani";
const lname = "Khan";
const age = 25;
ReactDOM.render(
<div>
<h1>My name is {`${fname} ${lname} and I am ${age} years old`}</h1>
<p>Here is your favourite Food</p>
<ul>
  <li>Coffee</li>
  <li>Coding</li>
  <li>Badminton</li>
  <li>Walking</li>
</ul>
</div>,
  document.getElementById('root')
  );

