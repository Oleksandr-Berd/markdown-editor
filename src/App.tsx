import React, { useContext } from 'react';
import ThemeContext from "./utils/context/themeContext";

import './App.css';
import { lightTheme } from './utils/styles/lightTheme';
import { darkTheme } from './utils/styles/darkTheme';
import { ThemeProvider } from '@emotion/react';
import SharedLayout from './layouts/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {

const { theme } = useContext(ThemeContext);

const currentTheme = theme === "light" ? lightTheme : darkTheme;

console.log(currentTheme);


  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <SharedLayout>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </SharedLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
