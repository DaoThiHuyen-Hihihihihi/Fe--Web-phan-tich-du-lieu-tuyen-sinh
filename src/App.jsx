import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import BoCucChinh from "./layout/BoCucChinh";
function App() {
  return (
    <BrowserRouter>
      <BoCucChinh>
        <AppRoutes />
      </BoCucChinh>
    </BrowserRouter>
  );
}

export default App;
