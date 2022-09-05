import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthorizationHOC from "./hoc/auth.hoc";
import SignInSignOutHOC from "./hoc/signin-signout-hoc";
import Posts from "./pages/posts";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
       
          <Route path="/" element={<SignInSignOutHOC />}>
            <Route index element={<Navigate to="/signin" />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
          </Route>
  

        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="*" element={<Navigate to={"/posts"} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
