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

export default function ServiceCard({ service, handlerEditService }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box m={1} position={"relative"}>
        <Card
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
          }}
        >
          {service?.servicePic ? (
            <CardMedia
              style={{ paddingTop: "56.25%" }}
              title="Barber's Profile Picture"
              image={`data:image/jpeg;base64,${service.servicePic}`}
              sx={{
                backgroundSize: "cover",
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
              {service?.title}
            </Typography>

            <Box
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                mt: "3px",
                textTransform: "uppercase",
              }}
            >
              {service?.description}
            </Box>
            <Box
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                mt: "3px",
                textTransform: "uppercase",
              }}
            >
              ${service?.price}
            </Box>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                handlerEditService(service);
              }}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
