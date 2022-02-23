import { Alert, Button, MenuItem, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const AddItemForm = ({ onAction }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload: any) => {
    onAction({ type: "add", payload });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        size="small"
        {...register("title", { required: "pole wymagane", minLength: 3 })}
      />
      {errors.title && (
        <Alert severity="warning">{errors.title?.message}</Alert>
      )}
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        size="small"
        {...register("price", { required: "pole wymagane", minLength: 1 })}
      />
      {errors.price && (
        <Alert severity="warning">{errors.price?.message}</Alert>
      )}

      <TextField
        fullWidth
        select
        label="category"
        size="small"
        defaultValue={""}
        {...register("category", { required: "pole wymagane" })}
      >
        <MenuItem value="food">food</MenuItem>
        <MenuItem value="clothes">clothes</MenuItem>
      </TextField>

      {errors.title && (
        <Alert severity="warning">{errors.category?.message}</Alert>
      )}
      <hr />
      <Button variant="contained" type="submit">
        send
      </Button>
    </form>
  );
};
