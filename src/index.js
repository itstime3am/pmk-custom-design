import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import SingInPageView from './component/sing-in-page/SingInPageView'
import PatternPageView from './component/pattern-page/PatternPageView'
import DesignPageView from './component/design-page/DesignPageView'

import Model from './component/design-page/Model'
import Test from './component/Test'

ReactDOM.render(
  <React.StrictMode>
    {/* <Model></Model> */}
    {/* <SingInPageView />  */}
    {/* <PatternPageView />  */}
    <DesignPageView />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
