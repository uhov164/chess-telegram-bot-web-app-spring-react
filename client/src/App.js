import { Board } from "./Components/Board";
import './Styles/App.css'
import { Routes, Route } from "react-router-dom";

export function App() {

  return (
    <div>
      <Routes>
        <Route path="/:id/:playerLogin" element={<Board/>} />
      </Routes>
    </div>
  );
}

export default App;
