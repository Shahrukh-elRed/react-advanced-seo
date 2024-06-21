import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Shop from "./Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
