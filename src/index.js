import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sunburst from './Sunburst/SunburstChart.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
 ReactDOM.render(<Sunburst />, document.getElementById('root1'));
registerServiceWorker();
