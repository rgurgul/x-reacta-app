import { FunctionComponent, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemModel } from "../../core/types/models";
import { ItemsCtx } from "./items-ctx";

interface ItemProps {}

const Item: FunctionComponent<ItemProps> = () => {
  const { items } = useContext(ItemsCtx);
  const { id } = useParams();

  const found = items.find((item: ItemModel) => item.id === id);

  return <pre>{JSON.stringify(found, null, 2)}</pre>;
};

export default Item;
