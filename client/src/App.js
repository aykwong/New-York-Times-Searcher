import React from 'react';
import Home from "./pages/Home";


const App = () => (
  <div>
    <Home exact path="/" component={Home} />
  </div>
)

export default App;
