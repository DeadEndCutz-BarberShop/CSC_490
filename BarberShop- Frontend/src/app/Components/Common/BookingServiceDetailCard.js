import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import dummyservicepic from "../../Assets/Images/dummyservice.jpg";

export default function BookingServiceDetailCard({ service }) {
  console.log(service);
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        transition: "transform 0.3s ease-in-out",
        textDecoration: "none",
        boxShadow: "none",

        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: { xs: "", md: "center" },
          flexDirection: { xs: "column", sm: "row" },
          px: 2,
          bgcolor: "#009688",
          color: "white",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <Typography component="div" variant="h9">
            {service?.title}
          </Typography>
          <Typography variant="h20" component="div">
            {service?.description}
          </Typography>
          <Typography component="div" variant="h12">
            ${service?.price}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mt: "5px",
            }}
          ></Box>
        </CardContent>
      </Card>
    </Box>
  );
}
