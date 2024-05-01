"use client";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { fetchUser } from "../../../lib/Store/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Common/Loader";
import AdminView from "./AdminView";
import UserView from "./UserView";
import BarberView from "./BarberView";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user]);

  if (isLoading && !user) {
    return <Loader />;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <React.Fragment>
      <Navbar user={user} />

      {user?.role === "admin" && (
        <AdminView isLoading={isLoading} user={user} />
      )}
      {user?.role === "user" && <UserView isLoading={isLoading} user={user} />}
      {user?.role === "barber" && (
        <BarberView isLoading={isLoading} user={user} />
      )}
    </React.Fragment>
  );
}
