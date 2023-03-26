import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Hello from "./routes/Hello";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<Hello />}></Route>
        <Route path="/movie:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
