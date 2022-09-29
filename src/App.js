import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ExitPage from "./components/ExitPage";
import MainPage from "./components/MainPage";
import TestingPage from "./components/TestingPage";

export default function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/testing" component={TestingPage} />
        <Route exact path="/exit-page" component={ExitPage} />
      </Layout>
    </Switch>
  );
}
