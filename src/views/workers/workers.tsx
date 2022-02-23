import { Button } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import DataGrid from "../../common/components/data-grid";
import Search from "../../common/components/search";
import { WorkersCtx } from "./workers-ctx";

interface WorkersProps {}

const Workers: FunctionComponent<WorkersProps> = () => {
  const ctx = useContext(WorkersCtx);
  const handler = (ev: any) => {
    ctx.dispatch({type: 'search', payload: ev})
  };
  return (
    <>
      <Search controls={["name"]} onAction={handler}></Search>

      <DataGrid
        data={ctx.workers.workers}
        config={[{ key: "name" }]}
        onAction={handler}
      >
        <div>
          <Button>remove</Button>
        </div>
      </DataGrid>
    </>
  );
};

export default Workers;
