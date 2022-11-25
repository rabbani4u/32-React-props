import React from 'react';
import ReactDOM from 'react-dom';


const name = "Rabbani Khan";
ReactDOM.render(
<div>
<h1>Hello {name}</h1>
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

