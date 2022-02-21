import RouterConfig from "./core/nav/router-config";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./core/nav/nav";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <MainNav></MainNav>
          <RouterConfig></RouterConfig>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
