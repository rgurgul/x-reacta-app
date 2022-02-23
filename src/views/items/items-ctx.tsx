import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Api } from "../../core/config/api";

export const ItemsCtx = createContext({} as any);

const removeItem = async (id: string) => {
  try {
    await axios.delete(`${Api.ITEMS_END_POINT}/${id}`);
  } catch (error) {
    debugger;
  }
};

export const ItemsCtxProvider = ({ children }: any) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://api.debugger.pl/items").then((resp) => {
      setItems(resp.data.data);
    });
  }, []);

  return (
    <ItemsCtx.Provider value={{ items, removeItem }}>
      {children}
    </ItemsCtx.Provider>
  );
};
