import { TextField, FormControl } from "@mui/material";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Action } from "../../core/types/models";

interface SearchProps {
  controls: string[];
  onAction: (a: Action) => void;
}

const Search: FunctionComponent<SearchProps> = ({
  controls,
  onAction,
}: SearchProps) => {
  const {
    register,
    watch
  } = useForm();

  useEffect(() => {
    watch((val) => {
      onAction({ type: "search", payload: val });
    });
  }, []);

  return (
    <>
      <form>
        {controls.map((c: any) => {
          return (
            <FormControl key={c}>
              <TextField {...register(c)} type="text" />
            </FormControl>
          );
        })}
      </form>
    </>
  );
};

export default Search;
