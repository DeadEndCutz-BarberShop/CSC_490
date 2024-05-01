"use client";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../lib/Store/user/userActions";
import Loader from "../Common/Loader";
import Navbar from "../Navbar/Navbar";
import ServiceDetailCard from "../ServiceDetailCard";
import axios from "axios";
import { getCookie } from "../Common/Cookies";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  TextField,
  Avatar,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";

const timeSlots = [];
let hour = 8;
let minute = "00";
for (let i = 0; i < 48; i++) {
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour;
  timeSlots.push(
    `${displayHour.toString().padStart(2, "0")}:${minute} ${period}`
  );
  minute = minute === "00" ? "30" : "00";
  if (minute === "00") {
    hour = (hour + 1) % 24;
  }
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.user?.user);
  const isLoading = useSelector((state) => state.user?.isLoading);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]);
  const dispatch = useDispatch();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
    if (user) {
      setValue("firstName", user?.firstName);
      setValue("lastName", user?.lastName);
      setValue("email", user?.email);
      setValue("phone", user?.phone);
      setValue("location", user?.location);
      setSelectedHours(user.availableHours || []);
    }
  }, [user, dispatch]);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    clearErrors();
    setSelectedHours(user.availableHours || []);
    dispatch(fetchUser());
  };

  const handleSave = async (data) => {
    try {
      console.log(data);
      const accessToken = getCookie("access_token");
      const formData = new FormData();
      formData.append("profilePic", data?.profilePic);
      formData.append("userEmail", data?.email);
      const response = await axios.post(
        `${apiUrl}/auth/update-user`,
        { ...data, availableHours: selectedHours },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (data?.profilePic) {
        const updateProfilePicResponse = await axios.post(
          `${apiUrl}/auth/update/profile-pic`,
          formData
        );
      }

      setIsEditing(false);
      dispatch(fetchUser());
    } catch (error) {
      console.error("Error updating user details:", error);
    } finally {
    }
  };

  const onAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      setValue("profilePic", file);
      reader.readAsDataURL(file);
    }
  };

  const handleCircleClick = (hour) => {
    if (selectedHours.includes(hour)) {
      setSelectedHours(selectedHours.filter((h) => h !== hour));
    } else {
      setSelectedHours([...selectedHours, hour]);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar user={user} />
      <Container
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
        maxWidth="lg"
      >
        <Grid container spacing={4}>
          <Grid item width={"100%"}>
            <Box>
              {user?.profilePic || avatarPreview ? (
                <Avatar
                  src={
                    avatarPreview ||
                    `data:image/jpeg;base64,${user?.profilePic}`
                  }
                  alt="Profile Image"
                  sx={{ width: "100%", height: 250 }}
                  variant="rounded"
                />
              ) : (
                <Avatar
                  src=""
                  alt="Profile Image"
                  sx={{ width: { xs: "100%", md: 300 }, height: 250 }}
                  variant="rounded"
                />
              )}

              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={onAvatarChange}
                  style={{ display: "none" }}
                />
              )}
              {isEditing && (
                <Button variant="contained" component="label" sx={{ mt: 2 }}>
                  Upload Avatar
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onAvatarChange}
                    hidden
                  />
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4">Profile Details</Typography>
                {!isEditing && (
                  <Box>
                    <Button variant="contained" onClick={handleEdit}>
                      Edit
                    </Button>
                  </Box>
                )}
                {isEditing && (
                  <Box>
                    <Button variant="outlined" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </Box>
                )}
              </Box>
              <Divider />
              <Box mt={2}>
                <form onSubmit={handleSubmit(handleSave)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                        disabled={!isEditing}
                        error={errors.firstName ? true : false}
                        helperText={
                          errors.firstName ? errors.firstName.message : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                        disabled={!isEditing}
                        error={errors.lastName ? true : false}
                        helperText={
                          errors.lastName ? errors.lastName.message : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        disabled={!isEditing}
                        error={errors.email ? true : false}
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
                            helperText={
                              fieldState.invalid ? "Tel is invalid" : ""
                            }
                            error={fieldState.invalid}
                            disabled={!isEditing}
                            placeholder="+92 300 0012321"
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
                        {...register("location")}
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                        disabled={!isEditing}
                      />
                    </Grid>
                    {user?.role === "barber" && (
                      <Grid item xs={12}>
                        <Typography variant="h7">Available Hours:</Typography>
                        <Box
                          display="flex"
                          flexWrap="wrap"
                          sx={{
                            maxHeight: { xs: 200, md: "100%" },
                            overflow: "auto",
                            mt: 2,
                          }}
                        >
                          {timeSlots.map((hour) => (
                            <Button
                              key={hour}
                              variant={
                                selectedHours.includes(hour)
                                  ? "contained"
                                  : "outlined"
                              }
                              sx={{
                                borderRadius: "10%",
                                minWidth: 0,
                                margin: "4px",
                              }}
                              onClick={() => handleCircleClick(hour)}
                              disabled={!isEditing}
                            >
                              {hour}
                            </Button>
                          ))}
                        </Box>
                      </Grid>
                    )}

                    {/* Add more fields as needed */}
                    {isEditing && (
                      <Grid item xs={12} mt={3}>
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{ mr: 2 }}
                        >
                          Save
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                </form>
              </Box>
            </Box>

            {user?.role === "barber" && (
              <Box mt={4}>
                <Typography variant="h4">Services</Typography>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap="20px"
                  mt="10px"
                  flexWrap={"wrap"}
                >
                  {user?.services?.map((service) => {
                    return (
                      <ServiceDetailCard service={service} key={service.id} />
                    );
                  })}
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
