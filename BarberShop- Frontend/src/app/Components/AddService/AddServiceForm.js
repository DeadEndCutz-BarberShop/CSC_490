import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Avatar,
  Box,
  FormHelperText,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { toast, Bounce } from "react-toastify";
import axios from "axios";
import { getCookie } from "../Common/Cookies";
import { getToast } from "../Common/Toast";
import {
  fetchBarbers,
  fetchServices,
} from "../../../lib/Store/user/userActions";
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

export default function AddServiceForm({ open, handleClose, service }) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    setValue,
    formState: { errors },
  } = useForm({});

  const [profilePicPreview, setProfilePicPreview] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();
  const watchProfilePic = watch("servicePic");

  React.useEffect(() => {
    if (service) {
      Object.keys(service).forEach((key) => {
        if (service[key] !== undefined && key !== "id") {
          if (key !== "servicePic") setValue(key, service[key]);
        }
      });
    } else {
      setValue("title", "");
      setValue("description", "");
      setValue("price", "");
    }
  }, [service]);

  React.useEffect(() => {
    if (watchProfilePic?.length) {
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
    const accessToken = getCookie("access_token");
    let requestUrl = `${apiUrl}/services/add-service`;
    let successMessage = "Service added successfully";

    const formData = new FormData();
    formData.append("servicePic", data?.servicePic[0]);

    if (service) {
      requestUrl = `${apiUrl}/services/update-service/${service.id}`;
      successMessage = "Service updated successfully";
    }

    try {
      const response = await axios.post(
        requestUrl,
        { ...data, price: parseInt(data?.price) },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      formData.append("service_id", response?.data?.id);
      if (data?.servicePic[0]) {
        const updateServicePicResponse = await axios.post(
          `${apiUrl}/services/update/service-pic`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      }

      getToast(response.data.message || successMessage, "success");
      reset();
      handleClose();
      dispatch(fetchServices());
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Error";
      getToast(errorMessage, "error");
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
        <Typography variant="h5">
          {service ? "Edit Service" : "Add Service"}
        </Typography>
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
          <Typography variant="body1" fontWeight={500} mt="15px">
            Service picture:
          </Typography>
          <Box sx={{ position: "relative", marginBottom: 1 }}>
            <input
              type="file"
              {...register("servicePic", {})}
              accept="image/*"
              style={{ display: "none" }}
              id="servicePic"
            />
            <label htmlFor="servicePic">
              <Avatar
                src={
                  !service || profilePicPreview
                    ? profilePicPreview
                    : `data:image/jpeg;base64,${service?.servicePic}`
                }
                sx={{
                  width: 100,
                  height: 100,
                  cursor: "pointer",
                  mt: "10px",
                }}
                variant="rounded"
              />
            </label>
          </Box>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            {...register("title", {
              required: "Title is required",
            })}
            error={!!errors.title}
            helperText={errors.title ? errors.title.message : ""}
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            {...register("description", {
              required: "Description is required",
            })}
            error={!!errors.description}
            helperText={errors.description ? errors.description.message : ""}
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            type="number"
            {...register("price", {
              required: "Price is required",
            })}
            error={!!errors.price}
            helperText={errors.price ? errors.price.message : ""}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
            disabled={isLoading}
          >
            {service ? "Update Service" : "Add Service"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
