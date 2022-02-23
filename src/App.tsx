import RouterConfig from "./core/nav/router-config";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./core/nav/app-bar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container sx={{ pt: 3 }}>
          {/* <MainNav></MainNav> */}
          <RouterConfig></RouterConfig>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
