import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {SuccessTemplate} from './SuccessTemplate.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitation/accept/:id" element={<SuccessTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;
