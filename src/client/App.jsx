import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Profile from "./components/Profile";
import RedirectIfAuthenticated from "./components/RedirectIfAuthenticated";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute"; // Import AdminProtectedRoute
import BuyPackage from "./components/BuyPackage";
import AddTask from "./components/admin/AddTask";
import AddPackage from "./components/admin/AddPackage";

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Authenticated Redirect Routes */}
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfAuthenticated>
              <Signup />
            </RedirectIfAuthenticated>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy/:packageName"
          element={
            <ProtectedRoute>
              <BuyPackage />
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/addtask"
          element={
            <AdminProtectedRoute>
              <AddTask />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/addpackage"
          element={
            <AdminProtectedRoute>
              <AddPackage />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
