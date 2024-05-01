"use client";
import { Box, Button, Container, Grid } from "@mui/material";
import BarberCard from "../Common/BarberCard";
import React, { useEffect } from "react";
import AddBarber from "../AddBarber/AddBarberForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchBarbers } from "../../../lib/Store/user/userActions";
import Loader from "../Common/Loader";

export default function UserView({ isLoading, user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const barbers = useSelector((state) => state.user.barbers);

  useEffect(() => {
    if (user) {
      dispatch(fetchBarbers());
    }
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Container
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
        maxWidth="2xl"
      >
        <AddBarber
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
        <Grid container spacing={4}>
          {barbers?.map((barber) => (
            <BarberCard barber={barber} key={barber.id} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
