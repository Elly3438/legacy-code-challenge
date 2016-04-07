import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './components/MyComponent.jsx';

const App = (
  <div className='legacy-app-container'>
    <MyComponent text='This is some text I want to show and hide' />
  </div>
);

ReactDOM.render(App, document.getElementById('app'));