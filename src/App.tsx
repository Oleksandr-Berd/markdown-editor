import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";

import ThemeContext from "./utils/context/themeContext";

import "./App.css";
import { lightTheme } from "./utils/styles/lightTheme";
import { darkTheme } from "./utils/styles/darkTheme";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { getAllData, getOneData } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DocPage from "./pages/DocPage/DocPage";
import { Content } from "./utils/types/types";
import EditedContentPage from "./pages/EditedContent/EditedContentPage";
import NewDocPage from "./pages/NewDocPage/NewDocPage";

function App() {
  const [allContent, setAllContent] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [doc, setDoc] = useState<Content | null>(null);
  const [draft, setDraft] = useState<{
    name: string;
    content: string;
  } | null>(null);

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
  }, []);

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

 const handleDraft = ({name, content}: {name: string, content: string}) => {
  setDraft({name, content})
 };


 console.log(draft);
 
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
          >
            {isLoading ? <Loader /> : null}
            <Routes>
              <Route
                path="/"
                element={<HomePage defaultContent={defaultContent} />}
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
                element={<NewDocPage handleDraft={handleDraft} />}
              />
            </Routes>
          </SharedLayout>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
