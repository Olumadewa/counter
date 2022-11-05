import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Header from "./components/Header.jsx";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-full flex items-center flex-col">
        <section className="mt-5">
          <Header />
        </section>
        <div className="flex flex-1 items-center justify-center">
          <div className="pt-5">
            <Routes>
              {/* <Route path="/home" element={<Home />} /> */}
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/boundary"
                element={
                  <ErrorBoundary>
                    <ErrorBoundaryPage />
                  </ErrorBoundary>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
