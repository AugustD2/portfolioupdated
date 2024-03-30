import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
