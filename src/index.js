import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from 'react-scroll-to-top';
import { BsArrowUp } from 'react-icons/bs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ScrollToTop 
      title='Scroll To Top' 
      smooth 
      component={<BsArrowUp className='text-center mx-auto text-white text-xl' />}
    />
  </React.StrictMode>
);

