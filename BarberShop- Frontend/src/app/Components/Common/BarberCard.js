import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import logo from "../../Assets/Images/Logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GradeIcon from "@mui/icons-material/Grade";
import Link from "next/link";

export default function BarberCard({ barber }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box m={1} position={"relative"}>
        <Card
          component={Link}
          href={`barber/${barber.id}`}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease-in-out",
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
            },
            ":active": {
              transform: "scale(0.90)",
            },
          }}
        >
          {barber?.profilePic ? (
            <CardMedia
              style={{ paddingTop: "56.25%" }}
              title="Barber's Profile Picture"
              image={`data:image/jpeg;base64,${barber.profilePic}`}
              sx={{
                backgroundSize: "contain",
              }}
            />
          ) : (
            <CardMedia
              style={{ paddingTop: "56.25%" }}
              title="Default Profile Icon"
              image="./dummyuser.png"
              sx={{
                backgroundSize: "contain",
              }}
            />
          )}

          <CardContent style={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {barber?.firstName || "Barber"} {barber?.lastName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                mt: "10px",
              }}
            >
              <LocationOnIcon />
              <Box
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  mt: "3px",
                  textTransform: "uppercase",
                }}
              >
                {barber?.location || "Not Set"}
              </Box>
            </Box>
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                mt: "5px",
              }}
            >
              <GradeIcon />
              <Box
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  mt: "3px",
                  textTransform: "uppercase",
                }}
              >
                {barber?.averageRating || "0.0"}
              </Box>
            </Box> */}
          </CardContent>
          {/* <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions> */}
        </Card>
      </Box>
    </Grid>
  );
}
