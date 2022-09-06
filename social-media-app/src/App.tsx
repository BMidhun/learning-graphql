import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignInSignOutHOC from "./hoc/signin-signout-hoc";
import Posts from "./pages/posts";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AuthorizationHOC from "./hoc/auth.hoc";
import ProtectedRouteHOC from "./hoc/protected-route-hoc";
import SignOut from "./pages/signout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            <ProtectedRouteHOC protectedRoute={false}>
              <SignInSignOutHOC />
            </ProtectedRouteHOC>
          }
        >
          <Route index element={<Navigate to="/auth/login" />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<SignIn />}></Route>
        </Route>
        <Route path="/" element={<AuthorizationHOC />}>
          <Route
            path="posts"
            element={
              <ProtectedRouteHOC protectedRoute={true}>
                <Posts />
              </ProtectedRouteHOC>
            }
          ></Route>
            <Route
            path="my-profile"
            element={
              <ProtectedRouteHOC protectedRoute={true}>
                <Profile ownProfile={true}/>
              </ProtectedRouteHOC>
            }
          ></Route>
          <Route
            path="signout"
            element={
              <ProtectedRouteHOC protectedRoute={true}>
                <SignOut />
              </ProtectedRouteHOC>
            }
          ></Route>
        </Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="*" element={<Navigate to={"/posts"} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
