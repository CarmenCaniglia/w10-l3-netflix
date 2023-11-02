import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import CompleteGalleries from "./component/CompleteGalleries";
import Account from "./component/Account";
import Settings from "./component/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Account />} path="/edit" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<CompleteGalleries />} path="/" />
        <Route element={<MovieDetails />} path="/movie-details/:imdbID" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
