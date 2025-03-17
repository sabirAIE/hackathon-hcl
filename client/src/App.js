import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./ApiData/AuthContext";
import Signup from "./Components/Signup";
import Appointment from "./Components/Appointment";
import Appbar from "./Components/Navbar";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
      <Appbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute> } />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
