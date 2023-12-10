import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";


import ThemeContext from "./utils/context/themeContext";

import './App.css';
import { lightTheme } from './utils/styles/lightTheme';
import { darkTheme } from './utils/styles/darkTheme';
import SharedLayout from './layouts/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { getAllData } from './services/api';
import Loader from './components/Loader/Loader';
import ErrorPage from './pages/ErrorPage/ErrorPage';



function App() {
const [allContent, setAllContent] = useState<[] | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [isError, setIsError] = useState<string | null>(null)


const { theme } = useContext(ThemeContext);

const currentTheme = theme === "light" ? lightTheme : darkTheme;

const fetchData = async () =>{
  setIsLoading(true)
  const result = await getAllData()

  if (result.message){
    setIsError(result.message);
  } else {
    setAllContent(result);
  } 
setIsLoading(false);

  }


useEffect(() => {
fetchData()
},[])

let defaultContent

if (allContent) defaultContent = allContent.find(({name}) => name==="welcome.md")


  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {isError ? (
          <ErrorPage message={isError} />
        ) : (
          <SharedLayout defaultContent={defaultContent} allContent = {allContent ? allContent : []}>
            {isLoading ? <Loader /> : null}
            <Routes>
              <Route
                path="/"
                element={<HomePage defaultContent={defaultContent} />}
              />
            </Routes>
          </SharedLayout>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
