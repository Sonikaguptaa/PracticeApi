import { Routes,Route } from "react-router-dom";
import { MainPage } from './Pages/MainPage';
import { ChoseSubject } from './Pages/ChoseSubject';
import { MyBook } from "./Pages/myBook";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/:symbol" element={<MainPage/>}/>
        <Route path="/" element={<ChoseSubject/>}/>
        <Route path="/:symbol/:symbol2" element={<MyBook/>}/>
      </Routes>
    </>
  )
}

export default App
