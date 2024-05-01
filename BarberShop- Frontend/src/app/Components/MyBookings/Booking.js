"use client";
// src/components/Booking/Booking.js
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Common/Loader";
import { fetchUser } from "../../../lib/Store/user/userActions";
import BookingItem from "../Common/BookingItem"; // Import the BookingItem component
import { Grid, Typography, Box } from "@mui/material";

export default function Booking() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar user={user} />
      <Box p={3}>
        <Typography variant="h4" mb={3}>
          My Bookings
        </Typography>
        <Grid container spacing={3}>
          {user && user.bookings && user.bookings.length > 0 ? (
            user.bookings.map((booking) => (
              <Grid key={booking.id} item xs={12} sm={6} md={4} lg={3}>
                <BookingItem booking={booking} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1">No bookings found.</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
