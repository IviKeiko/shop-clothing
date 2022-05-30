import { Routes, Route } from "react-router-dom";
import Home from "./routs/home/home.component";
import Navigation from "./routs/navigation/navigation.component";
import SignIn from "./routs/sign-in/sign-in.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
