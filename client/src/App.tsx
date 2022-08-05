import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateOrEdit } from "./pages/CreateOrEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/create" element={<CreateOrEdit />} />
        <Route path="/posts/edit/{id}" element={<CreateOrEdit />} />
      </Routes>
    </div>
  );
}

export default App;
