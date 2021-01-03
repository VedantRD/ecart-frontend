import React, { createContext, useReducer } from 'react';
import './App.css';
import MainNavigation from './navigation/MainNavigation'
import { reducer, initialState } from './reducers/userReducer'
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

export const UserContext = createContext()

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    // Providing the state to all components
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>

        {/* Main Navigation */}
        <MainNavigation />

        {/* Applying global styling */}
        <GlobalStyle />

      </Router>
    </UserContext.Provider >
  );
}

export default App;
