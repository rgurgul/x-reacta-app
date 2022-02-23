import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { FunctionComponent, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CoreCtx } from "../../core/ctx/core-ctx";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    watch((val) => {
      console.log(val);
    });
  }, []);

  const submitHandler = (ev: any) => {
    ctx.logIn(ev);
  };

  const ctx = useContext(CoreCtx);

  const form = (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextField
        label="username"
        defaultValue={"admin@localhost"}
        {...register("username", { required: "pole wymagane", minLength: 4 })}
        type="text"
      />
      {errors.username?.message}
      <hr />
      <TextField
        label="password"
        defaultValue={"Admin1"}
        {...register("password")}
        type="password"
      />
      <hr />
      <Button type="submit" variant="contained">
        send
      </Button>
    </form>
  );

  const logoutBtn = <Button variant="contained" onClick={ctx.logOut}>logout</Button>

  return <>{ctx.loggedin ? logoutBtn : form}</>;
};

export default Login;
