import { lazy, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import ThemeContext from "./utils/context/themeContext";

import "./App.css";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

import { lightTheme } from "./utils/styles/lightTheme";
import { darkTheme } from "./utils/styles/darkTheme";
import { getAllData, getOneData } from "./services/api";
import { Content } from "./utils/types/types";

const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"))
const Loader = lazy(()=> import("./components/Loader/Loader"))
const HomePage = lazy(() => import ("./pages/HomePage/HomePage"))
const EditedContentPage = lazy(()=> import("./pages/EditedContent/EditedContentPage"))
const NewDocPage = lazy(() => import("./pages/NewDocPage/NewDocPage"))
const DocPage = lazy(()=> import("./pages/DocPage/DocPage"))

function App() {
  const [allContent, setAllContent] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [doc, setDoc] = useState<Content | null>(null);
   const [isSideBar, setIsSideBar] = useState<boolean>(false);
   const [page, setPage] = useState<number>(1)


  const { theme } = useContext(ThemeContext);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  const fetchData = async () => {
    setIsLoading(true);
    const result = await getAllData();

    if (result.message) {
      setIsError(result.message);
    } else {
      setAllContent(result);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [isSideBar]);

  const fetchDoc = async (name: string) => {
    setIsLoading(true);
    const result = await getOneData(name);

    if (result.message) {
      setIsError(result.message);
    } else {
      setDoc(result[0]);
    }
    setIsLoading(false);
  };


const toggleSideBar = () => {
  setIsSideBar(!isSideBar);
};

const nextDocs = () => {
setPage(prev => prev + 1)
}

const prevDocs = () => {
  setPage((prev) => prev - 1);
}
 
const clearName = () => {
  setDoc(null)
}

  let defaultContent;

  if (allContent)
    defaultContent = allContent.find(({ name }) => name === "welcome.md");



  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {isError ? (
          <ErrorPage message={isError} />
        ) : (
          <SharedLayout
            defaultContent={defaultContent}
            allContent={allContent ? allContent : []}
            specificName={doc ? doc.name : null}
            toggleSideBar={toggleSideBar}
            isSideBar={isSideBar}
            clearName={clearName}
            nextDocs={nextDocs}
            prevDocs={prevDocs}
            page={page}
          >
            {isLoading ? <Loader /> : null}
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    defaultContent={defaultContent}
                  />
                }
              />
              <Route
                path=":name"
                element={<DocPage fetchDoc={fetchDoc} doc={doc} />}
              />
              <Route
                path="edit"
                element={<EditedContentPage doc={doc ? doc : defaultContent} />}
              />
              <Route
                path="new"
                element={<NewDocPage isSideBar={isSideBar} />}
              />
            </Routes>
          </SharedLayout>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
