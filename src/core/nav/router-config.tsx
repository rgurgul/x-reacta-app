import { Route, Routes } from "react-router-dom";
import Items from "../../views/items/items";
import Workers from "../../views/workers/workers";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="items" element={<Items />} />
      <Route path="workers" element={<Workers />} />
    </Routes>
  );
};

export default RouterConfig;
