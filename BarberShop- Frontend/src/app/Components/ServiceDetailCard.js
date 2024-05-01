import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import Image from "next/image";
import dummyservicepic from "../Assets/Images/dummyservice.jpg";

export default function ServiceDetailCard({ service }) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        transition: "transform 0.3s ease-in-out",
        textDecoration: "none",

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
        }}
      >
        {service?.servicePic ? (
          <CardMedia
            title="Barber's Profile Picture"
            image={`data:image/jpeg;base64,${service?.servicePic}`}
            sx={{
              backgroundSize: "cover",
              height: "200px",
              width: "400px",
            }}
          />
        ) : (
          <Image
            alt="Default "
            src={dummyservicepic}
            width={400}
            height={200}
            objectFit="cover"
          />
        )}

        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography component="div" variant="h5">
            {service?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {service?.description}
          </Typography>
          <Typography component="div" variant="h6">
            {service?.price}
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
