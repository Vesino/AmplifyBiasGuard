import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';

import { Amplify, Storage } from 'aws-amplify';
import awsExports from './aws-exports.js';

Amplify.configure(awsExports);
Storage.configure({ level: 'private' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
