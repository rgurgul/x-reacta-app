import RouterConfig from "./core/nav/router-config";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./core/nav/app-bar";
import { CoreCtx, CoreCtxProvider } from "./core/ctx/core-ctx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CoreCtxProvider>
          <CoreCtx.Consumer>
            {(ctx: any) => {
              return (
                <>
                  <ResponsiveAppBar></ResponsiveAppBar>
                  <Container sx={{ pt: 3 }}>
                    {/* <MainNav></MainNav> */}
                    <RouterConfig></RouterConfig>
                  </Container>
                </>
              );
            }}
          </CoreCtx.Consumer>
        </CoreCtxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
