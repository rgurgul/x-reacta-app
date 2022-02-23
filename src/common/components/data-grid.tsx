import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FunctionComponent, useCallback } from "react";
import { Action } from "../../core/types/models";

interface DataGridProps {
  data: any[];
  config: any[];
  onAction: (a: Action) => void;
}

const DataGrid: FunctionComponent<DataGridProps> = ({
  data,
  config,
  children,
  onAction,
}) => {
  const clickHandler = useCallback(
    ({
      target: { innerText },
      currentTarget: {
        dataset: { id },
      },
    }: any) => {
      onAction({ type: innerText, payload: id });
    },
    []
  );

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>LP</TableCell>
            {config.map((c, id) => (
              <TableCell key={id}>{(c.text || c.key).toUpperCase()}</TableCell>
            ))}
            <TableCell colSpan={2}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, id) => {
            return (
              <TableRow key={id}>
                <TableCell>{id + 1}</TableCell>
                {config.map((col: any, ix) => {
                  switch (col.type) {
                    case "image":
                      return (
                        <TableCell key={ix}>
                          <img src={item[col.key]} alt="" width={50} />
                        </TableCell>
                      );
                    case "input":
                      return (
                        <TableCell key={ix}>
                          <TextField
                            size="small"
                            defaultValue={item[col.key]}
                            type="text"
                          />
                        </TableCell>
                      );
                    default:
                      return <TableCell key={ix}>{item[col.key]}</TableCell>;
                  }
                })}
                <TableCell data-id={item.id} onClick={clickHandler}>
                  {children}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default DataGrid;
