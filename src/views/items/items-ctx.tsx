import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Api } from "../../core/config/api";
import { ItemsFiltersModel } from "../../core/types/models";

export const ItemsCtx = createContext({} as any);

export const ItemsCtxProvider = ({ children }: any) => {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    currentPage: 1,
    itemsPerPage: 5,
  } as ItemsFiltersModel);

  useEffect(() => {
    fetchItems();
  }, [filters]);

  const updateFilters = (nextFilters: any) => {
    setFilters((prev: ItemsFiltersModel) => ({ ...prev, ...nextFilters }));
  };

  const removeItem = async (id: string) => {
    try {
      await axios.delete(`${Api.ITEMS_END_POINT}/${id}`);
      fetchItems();
    } catch (error) {
      debugger;
    }
  };

  const fetchItems = () => {
    axios
      .get("https://api.debugger.pl/items", { params: filters })
      .then((resp) => {
        setItems(resp.data.data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ItemsCtx.Provider value={{ items, removeItem, updateFilters }}>
      {children}
    </ItemsCtx.Provider>
  );
};
