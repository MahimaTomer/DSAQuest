import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp2";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./components/ForgotPassword"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PhoneSignUp from "./components/PhoneSignUp";
import TopicPage from './components/TopicPage';

function App() {
  return (
   <div className="row">
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              <Route path="/Forgotpassword" element={<ForgotPassword />} />
              <Route path="/home/topic/:title" element={<TopicPage/>} exact/>

            </Routes>
            
          </UserAuthContextProvider>
          </div>
        
  );
}

export default App;