"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddBarber from "../AddBarber/AddBarberForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../lib/Store/user/userActions";
import Loader from "../Common/Loader";
import ServiceCard from "../Common/ServiceCard";
import AddServiceForm from "../AddService/AddServiceForm";

export default function BarberView({ isLoading, user }) {
  const [open, setOpen] = React.useState(false);
  const [service, setService] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setService(null);
    setOpen(false);
  };
  const dispatch = useDispatch();
  const services = useSelector((state) => state.user.services);

  const handlerEditService = (ser) => {
    setService(ser);
    handleOpen();
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchServices());
    }
  }, [user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Container
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
        maxWidth="2xl"
      >
        <Box display={"flex"} justifyContent={"end"} mb="20px">
          <Button variant="contained" onClick={handleOpen}>
            Add Service
          </Button>
        </Box>
        <AddServiceForm
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          service={service}
        />
        <Typography variant="h4" marginBottom={"20px"}>
          Services
        </Typography>
        {service?.length === 0 && <Box>No Service</Box>}
        <Grid container spacing={4}>
          {services?.map((service) => (
            <ServiceCard
              service={service}
              key={service.id}
              handlerEditService={handlerEditService}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
