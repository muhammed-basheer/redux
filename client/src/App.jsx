import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Profile from "../src/pages/Profile";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { AdminPrivateRoute } from "./components/adminPrivateRoute";
import AdminSignIn from "./pages/adminSignIn";
import AdminDashboard from "./pages/adminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/sign-in" element={<AdminSignIn />} />

        {/* User-Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Admin-Protected Routes */}
        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
