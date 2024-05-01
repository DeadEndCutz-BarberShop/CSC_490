"use client";
import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Avatar,
  FormHelperText,
  Grid,
  Typography,
  Box,
  Modal,
  Divider,
} from "@mui/material";
import { toast, Bounce } from "react-toastify";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { getCookie } from "../Common/Cookies";
import { getToast } from "../Common/Toast";
import {
  fetchBarbers,
  fetchServices,
  fetchUser,
} from "../../../lib/Store/user/userActions";
import { useDispatch } from "react-redux";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

export default function BookingForm({
  open,
  handleClose,
  barberDetails,
  booking,
}) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({});

  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();
  const [selectedServices, setSelectedServices] = React.useState([]);
  const [selectedHours, setSelectedHours] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const toggleService = (service) => {
    clearErrors();
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service]
    );
  };

  React.useEffect(() => {
    let totalPrice = selectedServices.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [selectedServices]);

  const onSubmit = async (data) => {
    console.log(data?.date);
    if (selectedServices.length === 0) {
      setError("services", {
        type: "manual",
        message: "Please select at least one service.",
      });
      return;
    } else {
      clearErrors("services");
    }

    if (selectedHours.length === 0) {
      setError("hours", {
        type: "manual",
        message: "Please select at least one hour.",
      });
      return;
    } else {
      clearErrors("hours");
    }

    setIsLoading(true);
    const accessToken = getCookie("access_token");
    let requestUrl = `${apiUrl}/bookings`;
    let successMessage = "Booking added successfully";

    try {
      const response = await axios.post(
        requestUrl,
        {
          ...data,
          bookedHours: selectedHours,
          services: selectedServices,
          barberId: barberDetails?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      getToast(response.data.message || successMessage, "success");
      reset();
      dispatch(fetchUser());
      handleClose();
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "Error while bookeing";
      getToast(errorMessage, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCircleClick = (hour) => {
    clearErrors();
    if (selectedHours.includes(hour)) {
      setSelectedHours(selectedHours.filter((h) => h !== hour));
    } else {
      setSelectedHours([...selectedHours, hour]);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
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
          {booking ? "Edit Booking" : "Add Booking"}
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
          <Typography variant="h6" mt={2}>
            Choose date:
          </Typography>
          <TextField
            label="Date"
            fullWidth
            type="date"
            margin="normal"
            {...register("date", {
              required: "Date is required",
            })}
            inputProps={{ min: getCurrentDate() }}
            error={!!errors.date}
            helperText={errors.date ? errors.date?.message : ""}
          />
          <Typography variant="h6" mt={2}>
            Choose Services:
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            gap={2}
            flexWrap="nowrap"
            overflow={"auto"}
            mt={2}
          >
            {barberDetails?.services?.map((service) => (
              <Box
                key={service.id}
                bgcolor={selectedServices.includes(service) ? "#bbdefb" : ""}
                color="primary"
                onClick={() => toggleService(service)}
                sx={{ mr: 1, cursor: "pointer" }}
                border={"1px solid"}
                borderColor={"#bbdefb"}
                borderRadius={"10px"}
                flexGrow={1}
              >
                <Box
                  textAlign={"center"}
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  p={1}
                >
                  <Avatar
                    alt={service?.name}
                    src={`data:image/jpeg;base64,${service?.servicePic}`}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box whiteSpace={"nowrap"}>{service.title}</Box>
                  <Box>${service?.price}</Box>
                </Box>
              </Box>
            ))}
          </Box>
          {errors.services && (
            <Typography sx={{ mt: 1 }} variant="body2" color="error">
              {errors.services.message}
            </Typography>
          )}
          <Box>
            <Typography variant="h6" mt={2}>
              Available Time:
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              sx={{
                maxHeight: { xs: 200, md: "100%" },
                overflow: "auto",
                mt: 2,
              }}
            >
              {barberDetails?.availableHours?.map((hour) => (
                <Button
                  key={hour}
                  variant={
                    selectedHours.includes(hour) ? "contained" : "outlined"
                  }
                  sx={{
                    borderRadius: "10%",
                    minWidth: 0,
                    margin: "4px",
                  }}
                  onClick={() => handleCircleClick(hour)}
                >
                  {hour}
                </Button>
              ))}
            </Box>
            <Box mt={1}>
              {errors.hours && (
                <Typography variant="body2" color="error">
                  {errors.hours.message}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Payment Summary */}
          <Box mt={2}>
            <Typography variant="h6" mb={1}>
              Payment Summary
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              {selectedServices.map((service) => (
                <Box
                  key={service.id}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  p={2}
                  bgcolor={"#bbdefb"}
                  borderRadius={"10px"}
                >
                  <Typography fontWeight={500}>{service.title}</Typography>
                  <Typography fontWeight={700}>${service.price}</Typography>
                </Box>
              ))}
            </Box>

            <Divider sx={{ mt: 3 }} />

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              mt={1}
              px={2}
            >
              <Typography variant="h6">Total Due:</Typography>
              <Typography variant="h6">${totalPrice}</Typography>
            </Box>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
          >
            {booking ? "Update Booking" : "Add Booking"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
