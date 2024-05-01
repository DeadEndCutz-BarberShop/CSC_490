import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import BookingServiceDetailCard from "../Common/BookingServiceDetailCard";

export default function BookingItem({ booking }) {
  return (
    <Card variant="outlined" style={{ marginBottom: "20px", flexGrow: 1 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          <b>Date:</b> {new Date(booking.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Status:</b> {booking.status}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Booked Hours:</b> {booking.bookedHours.join(", ")}
        </Typography>
        <Typography variant="h6" component="h4" gutterBottom>
          <b>Services:</b>
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {booking?.services?.map((service) => (
            <BookingServiceDetailCard key={service.id} service={service} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
