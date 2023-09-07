import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Main from "./pages/main/Main";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
