import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './store';
store.dispatch({ type: 'account/deposit', payload: 100 });
console.log(store.getState());

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App />
   </StrictMode>
);
