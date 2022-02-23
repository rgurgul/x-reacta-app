import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import { FunctionComponent, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../common/components/data-grid";
import { Action, GridFieldModel, ItemsGridKeys } from "../../core/types/models";
import { ItemsCtx } from "./items-ctx";

interface ItemsProps {}

const Items: FunctionComponent<ItemsProps> = () => {
  const ctx = useContext(ItemsCtx);
  const navi = useNavigate();
  const config: GridFieldModel<ItemsGridKeys>[] = useMemo<
    GridFieldModel<ItemsGridKeys>[]
  >(
    () => [
      { key: "title" },
      { key: "imgSrc", type: "image" },
      { key: "price", type: "input" },
    ],
    []
  );

  const actionHandler = ({ type, payload }: Action) => {
    switch (type) {
      case "MORE":
        navi(payload)
        break;
      case "REMOVE":
        ctx.removeItem(payload);
    }
  };

  return (
    <>
      <Card>
        <CardHeader title="items"></CardHeader>
        <CardContent>
          <DataGrid data={ctx.items} config={config} onAction={actionHandler}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained">more</Button>
              <Button variant="outlined" color="info">
                remove
              </Button>
            </Box>
          </DataGrid>
        </CardContent>
      </Card>
    </>
  );
};

export default Items;
