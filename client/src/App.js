import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
      <Container>
        <MenuBar />
        <Route exact patch="/" component={Home} />
        <Route exact patch="/login" component={Login} />
        <Route exact patch="/register" component={Register} />
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
