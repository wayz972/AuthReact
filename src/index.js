import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import {UserContextProvider} from './context/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* j'ai envelopper toute mon application avec mon provider .  APP deviens l'enfant ilpeut recevoir des props */}
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </BrowserRouter>,
);


