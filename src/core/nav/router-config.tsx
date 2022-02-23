import { Route, Routes } from "react-router-dom";
import Item from "../../views/items/item";
import Items from "../../views/items/items";
import { ItemsCtxProvider } from "../../views/items/items-ctx";
import Login from "../../views/login/login";
import Workers from "../../views/workers/workers";
import { WorkersCtxProvider } from "../../views/workers/workers-ctx";

const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path="items"
        element={
          <ItemsCtxProvider>
            <Items />
          </ItemsCtxProvider>
        }
      />
      <Route
        path="items/:id"
        element={
          <ItemsCtxProvider>
            <Item />
          </ItemsCtxProvider>
        }
      />
      <Route
        path="workers"
        element={
          <WorkersCtxProvider>
            <Workers />
          </WorkersCtxProvider>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default RouterConfig;
