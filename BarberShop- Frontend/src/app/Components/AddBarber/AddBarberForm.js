"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, FormHelperText, Modal, Typography } from "@mui/material";
import { toast, Bounce } from "react-toastify";
import axios from "axios";
import { getCookie } from "../Common/Cookies";
import { getToast } from "../Common/Toast";
import { fetchBarbers } from "../../../lib/Store/user/userActions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: 500, md: 600 },
  height: { xs: "100%", sm: "auto" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddBarberForm({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const accessToken = getCookie("access_token");
    try {
      const addBarberResponse = await axios.post(
        `${apiUrl}/auth/add-barber`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      getToast(
        addBarberResponse?.data?.message || "Barber added successfully",
        "success"
      );
      reset();
      handleClose();
      dispatch(fetchBarbers());
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errorMessage = error?.response?.data?.message || "Unauthorized";
        if (errorMessage === "Barber already exists") {
          getToast("Barber already exists", "error");
          setError("email", {
            type: "custom",
            message: errorMessage,
          });
        }
      } else {
        getToast(error?.response?.data?.message, "error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5">Create Barber</Typography>
        <Box
          fontSize={"26px"}
          position={"absolute"}
          top={"20px"}
          right={"20px"}
          onClick={handleClose}
          sx={{
            cursor: "pointer",
          }}
        >
          x
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("firstName", {
              required: "First Name is required",
            })}
            autoComplete="given-name"
            name="firstName"
            fullWidth
            type="text"
            label="First Name"
            autoFocus
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ""}
            sx={{
              mt: 2,
            }}
          />

          <TextField
            {...register("lastName", {
              required: "Last Name is required",
            })}
            fullWidth
            type="text"
            label="Last Name"
            name="lastName"
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ""}
            sx={{
              mt: 2,
            }}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              required: "Password is required",
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            disabled={isLoading}
          >
            Add Barber
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
