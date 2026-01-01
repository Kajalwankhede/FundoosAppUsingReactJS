import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Login from "./components/Login";
import Register from "./components/Register";

// components
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
