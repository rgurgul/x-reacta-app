import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* console.log(watch());
  console.log(errors); */

  useEffect(() => {
    watch((val) => {
      console.log(val);
    });
  }, []);

  const submitHandler = (ev: any) => {
    debugger;
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          label="username"
          {...register("username", { required: "pole wymagane", minLength: 4 })}
          type="text"
        />
        {errors.username?.message}
        <hr />
        <TextField label="password" {...register("password")} type="password" />
        <hr />
        <Button type="submit" variant="contained">
          send
        </Button>
      </form>
    </>
  );
};

export default Login;
