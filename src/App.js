import { HomePage } from './Pages/index'
import {
HashRouter as Router,
Routes,
Route,
}
  from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
