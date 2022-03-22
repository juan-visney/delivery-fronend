import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Product/Products'


function App () {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" exact element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
