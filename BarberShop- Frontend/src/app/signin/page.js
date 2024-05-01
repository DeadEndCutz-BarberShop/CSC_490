"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as MUILink } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logo from "../Assets/Images/Logo.png";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignInSide() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const signResponse = await axios.post(`${apiUrl}/auth/signin`, data);
      toast(
        signResponse?.data?.message ||
          "Register and profile picture updated successfully",
        {
          type: "success",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
          transition: Bounce,
        }
      );
      document.cookie = `access_token=${signResponse?.data?.access_token}`;
      reset();
      router.push("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errorMessage = error?.response?.data?.message || "Unauthorized";
        if (errorMessage === "Incorrect password") {
          toast("Incorrect password", {
            type: "error",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
          setError("password", {
            type: "custom",
            message: "Incorrect password",
          });
        } else {
          toast("User not found or incorrect email", {
            type: "error",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
          setError("email", {
            type: "custom",
            message: "User not found or incorrect email",
          });
        }
      } else {
        toast(error?.response?.data?.message, { type: "error" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url('./signinbg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        minHeight={"100vh"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mt: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={logo} width={80} height={80} alt="logo" priority />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <MUILink href="#" variant="body2">
                  Forgot password?
                </MUILink> */}
              </Grid>
              <Grid item>
                <MUILink href="signup" variant="body2" component={Link}>
                  {"Don't have an account? Sign Up"}
                </MUILink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignInSide;
