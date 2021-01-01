import React, { createContext, useReducer } from 'react';
import './App.css';
import MainNavigation from './navigation/MainNavigation'
import { reducer, initialState } from './reducers/userReducer'
import { BrowserRouter as Router } from 'react-router-dom';

export const UserContext = createContext()

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <MainNavigation />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
