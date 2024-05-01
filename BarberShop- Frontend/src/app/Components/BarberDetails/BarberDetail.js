"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../lib/Store/user/userActions";
import Loader from "../Common/Loader";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import { getCookie } from "../Common/Cookies";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import ServiceDetailCard from "../../Components/ServiceDetailCard";
import BookingForm from "../AddBookingForm/BookingForm";

export default function BarberDetail() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [barberDetails, setBarberDetails] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const params = useParams();
  const { id } = params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user, dispatch]);

  useEffect(() => {
    fetchBarberDetails();
  }, []);

  const fetchBarberDetails = async () => {
    try {
      const accessToken = getCookie("access_token");
      setIsLoading(true);
      const { data } = await axios.get(`${apiUrl}/auth/${id}/baber-details`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setBarberDetails(data);
    } catch (error) {
      console.error("Error fetching barber details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar user={user} />
      <BookingForm
        handleClose={handleClose}
        open={open}
        barberDetails={barberDetails}
      />
      <Container
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
        maxWidth="2xl"
      >
        <Container maxWidth="xl" sx={{ mt: { xs: "20px", md: "40px" } }}>
          {user && barberDetails?.services && barberDetails?.availableHours && (
            <Box display={"flex"} justifyContent="flex-end" mb={2}>
              <Button variant="contained" onClick={handleOpen}>
                Book now
              </Button>
            </Box>
          )}

          <Box
            display={"flex"}
            gap="20px"
            sx={{
              flexDirection: { xs: "column", md: "row" },
            }}
            justifyContent={"center"}
            w="100%"
          >
            <Box bgcolor={"grey.300"} sx={{ borderRadius: "10px" }} flex={0.8}>
              <Typography
                variant="h4"
                sx={{
                  px: "20px",
                  py: "10px",
                }}
              >
                Profile
              </Typography>
              <Divider />
              {barberDetails?.profilePic ? (
                <Image
                  src={`data:image/jpeg;base64,${barberDetails?.profilePic}`}
                  width={200}
                  height={300}
                  objectFit="cover"
                  alt="profile"
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                />
              ) : (
                <Image
                  src={`/dummyuser.png`}
                  width={200}
                  height={300}
                  objectFit="cover"
                  alt="profile"
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                />
              )}

              <Box
                sx={{
                  p: "30px",
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box sx={{ fontWeight: 500 }}>Name: </Box>
                  <Box>
                    {barberDetails?.firstName || "Not Set"}
                    {barberDetails?.lastName}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box sx={{ fontWeight: 500 }}>Location: </Box>
                  <Box>{barberDetails?.location || "Not Set"}</Box>
                </Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box sx={{ fontWeight: 500 }}>Phone: </Box>
                  <Box>{barberDetails?.phone || "Not Set"}</Box>
                </Box>
                <Box>
                  <Box sx={{ fontWeight: 500, mb: 1 }}>Available Hours: </Box>
                  <Box display="flex" flexWrap="wrap">
                    {barberDetails?.availableHours?.map((hour) => (
                      <Box
                        key={hour}
                        sx={{
                          borderRadius: "10%",
                          minWidth: 0,
                          margin: "4px",
                        }}
                        bgcolor={"white"}
                        p={1}
                      >
                        {hour}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: "1",
                borderRadius: "10px",
              }}
              bgcolor={"grey.300"}
            >
              <Typography
                sx={{
                  px: "20px",
                  py: "10px",
                }}
                variant="h4"
              >
                Services
              </Typography>
              <Divider />
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap="20px"
                mt="20px"
                p="20px"
              >
                {barberDetails?.services?.map((service) => {
                  return <ServiceDetailCard service={service} />;
                })}

                {!barberDetails?.services?.length && (
                  <Typography variant="h6">Not any services</Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}
