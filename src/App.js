import { ThemeProvider } from "@material-ui/styles";
import Header from "./components/Header";
import { theme } from "./theme/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/the-revolution"
            component={() => <div>the-revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route
            exact
            path="/mobile-project"
            component={() => <div>mobile-project</div>}
          />
          <Route
            exact
            path="/custom-software"
            component={() => <div>software</div>}
          />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
