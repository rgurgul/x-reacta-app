import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Pagination,
} from "@mui/material";
import { FunctionComponent, useContext, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../common/components/data-grid";
import BasicModal from "../../common/components/modal";
import Search from "../../common/components/search";
import { CoreCtx } from "../../core/ctx/core-ctx";
import { Action, GridFieldModel, ItemsGridKeys } from "../../core/types/models";
import { AddItemForm } from "./add-item";
import { ItemsCtx } from "./items-ctx";

interface ItemsProps {}

const Items: FunctionComponent<ItemsProps> = () => {
  const ctx = useContext(ItemsCtx);
  const coreCtx = useContext(CoreCtx);
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

  const modalRef: any = useRef();

  const actionHandler = ({ type, payload }: Action) => {
    switch (type) {
      case "MORE":
        navi(payload);
        break;
      case "REMOVE":
        ctx.removeItem(payload);
        break;
      case "search":
        ctx.updateFilters(payload);
        break;
      case "add":
        //ctx.addItem(payload);
        //
        modalRef.current?.handleClose();
        break;
    }
  };

  const setPage = (ev: any, currentPage: number) => {
    debugger;
    //updateFilters({ currentPage });
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Card sx={{ flexBasis: "1/4" }}>
          <CardContent>
            <Search
              onAction={actionHandler}
              controls={["title", "priceFrom"]}
            ></Search>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="items"></CardHeader>
          <CardContent>
            <BasicModal ref={modalRef}>
              <AddItemForm onAction={actionHandler} />
            </BasicModal>

            <Pagination
              page={1}
              onChange={setPage}
              count={Math.ceil(100 / 10)}
              color="primary"
            />

            <DataGrid data={ctx.items} config={config} onAction={actionHandler}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained">more</Button>
                <Button
                  disabled={!coreCtx.loggedin}
                  variant="outlined"
                  color="info"
                >
                  remove
                </Button>
              </Box>
            </DataGrid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Items;
