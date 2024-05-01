"use client";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/Images/Logo.png";
import { FormHelperText, Paper } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      location: "",
      phone: "",
      profilePic: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [profilePicPreview, setProfilePicPreview] = React.useState(null);
  const router = useRouter();
  const watchProfilePic = watch("profilePic");

  React.useEffect(() => {
    if (watchProfilePic) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicPreview(reader.result);
      };
      reader.readAsDataURL(watchProfilePic[0]);
    } else {
      setProfilePicPreview(null);
    }
  }, [watchProfilePic]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("profilePic", data?.profilePic[0]);
    formData.append("userEmail", data?.email);

    try {
      const registerResponse = await axios.post(
        `${apiUrl}/auth/register`,
        data
      );
      const updateProfilePicResponse = await axios.post(
        `${apiUrl}/auth/update/profile-pic`,
        formData
      );

      toast(
        registerResponse?.data?.message ||
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
      reset();
      router.push("/");
    } catch (error) {
      const errorMessage = Array.isArray(error?.response?.data?.message)
        ? error?.response?.data?.message[0]
        : error?.response?.data?.message;
      toast(errorMessage || "Something went wrong", {
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500}>
                  Profile Picture:
                </Typography>
                <Box sx={{ position: "relative", marginBottom: 2 }}>
                  <input
                    type="file"
                    {...register("profilePic", {
                      required: "Profile picture is required",
                    })}
                    accept="image/*"
                    style={{ display: "none" }}
                    id="profilePic"
                  />
                  <label htmlFor="profilePic">
                    <Avatar
                      src={profilePicPreview}
                      sx={{
                        width: 100,
                        height: 100,
                        cursor: "pointer",
                        mt: "10px",
                      }}
                      variant="rounded"
                    />
                  </label>
                  {errors.profilePic?.message && (
                    <FormHelperText error sx={{ mt: "10px" }}>
                      {errors.profilePic.message}
                    </FormHelperText>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", { required: "Email is required" })}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                />
              </Grid>
              <Grid item display={"flex"} width={"100%"}>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    validate: (value) =>
                      matchIsValidTel(value, {
                        onlyCountryies: [], // optional,
                        excludedCountryies: [], // optional
                        continents: [], // optional
                      }),
                  }}
                  render={({
                    field: { ref: fieldRef, value, ...fieldProps },
                    fieldState,
                  }) => (
                    <MuiTelInput
                      {...fieldProps}
                      value={value ?? ""}
                      inputRef={fieldRef}
                      helperText={fieldState.invalid ? "Tel is invalid" : ""}
                      error={fieldState.invalid}
                      placeholder="+1 336 9012321"
                      sx={{
                        width: "100%",
                      }}
                    />
                  )}
                />
                {errors.phone?.message && (
                  <FormHelperText error sx={{ mt: 1 }}>
                    {errors.phone.message}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", {
                    required: "Password is required",
                  })}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ""}
                />
              </Grid>
              <Grid item xs={12}>
                {watch("role") === "barber" && (
                  <Grid item xs={12}>
                    <TextField
                      {...register("location")}
                      fullWidth
                      id="location"
                      label="Location"
                      name="location"
                      autoComplete="location"
                    />
                  </Grid>
                )}
                <Typography marginTop={"15px"} variant="body1">
                  Select Role:
                </Typography>
                <RadioGroup
                  row
                  aria-label="role"
                  name="role"
                  {...register("role", { required: "Role is required" })}
                >
                  <FormControlLabel
                    value="user"
                    control={<Radio />}
                    label="User"
                  />
                  <FormControlLabel
                    value="barber"
                    control={<Radio />}
                    label="Barber"
                    {...register("role")}
                  />
                </RadioGroup>
                <FormHelperText sx={{ color: "red" }}>
                  {errors.role?.message ? errors.role.message : ""}
                </FormHelperText>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" passHref>
                  <Typography variant="body2">
                    Already have an account? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
