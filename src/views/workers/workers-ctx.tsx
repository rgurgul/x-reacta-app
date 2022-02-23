import axios from "axios";
import { createContext, useCallback, useEffect, useReducer } from "react";
import { Api } from "../../core/config/api";
import { WorkersReducer } from "./wokers.reducer";

export const WorkersCtx = createContext({} as any);

export const WorkersCtxProvider = ({ children }: any) => {
  const [workers, dispatch] = useReducer(WorkersReducer, {
    workers: [],
    total: 0,
  });

  useEffect(()=>{
      //dispatch({type:'fetch', payload:{}})
      fetchWorkers();

  })

  const fetchWorkers = useCallback(() => {
    axios.get(Api.WORKERS_END_POINT).then((response) => {
      dispatch({ type: "save", payload: response.data.data });
    });
  }, []);

  return (
    <WorkersCtx.Provider value={{ workers,dispatch }}>
      {children}
    </WorkersCtx.Provider>
  );
};
