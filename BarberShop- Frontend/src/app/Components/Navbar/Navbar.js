"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Color } from "../../theme/color";
import Image from "next/image";
import logo from "../../Assets/Images/Logo.png";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearAllCookies } from "../Common/Cookies";
import { logout } from "../../../lib/Store/user/userslice";
import { useDispatch } from "react-redux";
const settings = [
  { label: "Profile", link: "profile", href: "/profile" },
  { label: "Logout", link: "logout", href: "/logout" },
];

function Navbar({ user }) {
  const pathname = usePathname();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userRole, setUserRole] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setUserRole(user?.role);
  }, [user]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    clearAllCookies();
    handleCloseUserMenu();
    router.push("/signin");
  };

  const handleProfile = () => {
    handleCloseUserMenu();
    router.push("/profile");
  };

  const handleSettingItemClick = (label) => {
    const settingsFunctions = {
      profile: handleProfile,
      logout: handleLogout,
    };

    if (settingsFunctions[label]) {
      settingsFunctions[label]();
    }
  };

  const userLinks = {
    user: [
      { label: "Home", href: "/", isActive: pathname === "/" },
      {
        label: "My Booking",
        href: "/my-booking",
        isActive: pathname === "/my-booking",
      },
    ],
    barber: [
      { label: "Home", href: "/", isActive: pathname === "/" },
      {
        label: "My Booking",
        href: "/my-booking",
        isActive: pathname === "/my-booking",
      },
    ],
    admin: [{ label: "Home", href: "/", isActive: pathname === "/" }],
  };

  const renderUserLinks = () => {
    return userLinks[userRole]?.map(({ label, href, isActive }) => (
      <MUILink
        key={label}
        component={Link}
        href={href}
        color={isActive ? Color?.white : "inherit"}
        bgcolor={isActive ? Color?.blue : "inherit"}
        sx={{
          textDecoration: "none",
          ":hover": { bgcolor: "red" },
          p: "28px",
        }}
      >
        {label}
      </MUILink>
    ));
  };

  return (
    <AppBar position="static" sx={{ bgcolor: Color?.navbar }}>
      <Container maxWidth="2xl">
        <Toolbar disableGutters sx={{ gap: { xs: "0px", md: "20px" } }}>
          {/* Logo */}
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Image src={logo} height={30} width={30} alt="logo" priority />
            </Box>

            {/* Brand Name */}
            <Typography
              variant="h5"
              noWrap
              component={Link}
              ml="2"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HairHaven
            </Typography>
          </Box>

          {/* Responsive Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              gap: "20px",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {userLinks[userRole]?.map(({ label, href }) => (
                <MenuItem key={label}>
                  <MUILink
                    component={Link}
                    href={href}
                    color={pathname === href ? "primary" : "inherit"}
                    sx={{ textDecoration: "none" }}
                  >
                    {label}
                  </MUILink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navigation Links */}
          {/* <Box sx={{ display: "flex", gap: "10px" }}> */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image src={logo} height={30} width={30} alt="logo" priority />
          </Box>
          <Typography
            variant="h1"
            noWrap
            component={Link}
            href={"/"}
            fontSize={{ xs: "18px" }}
            sx={{
              mr: 0,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HairHaven
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {renderUserLinks()}
          </Box>

          {/* User Avatar and Settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user && (
                  <Avatar
                    alt={user?.name}
                    src={`data:image/jpeg;base64,${user?.profilePic}`}
                  />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
            >
              <Box p="20px">
                <Box>
                  {user?.firstName} {user?.lastName}
                </Box>
                <Box display={"flex"} gap="10px">
                  <Box sx={{ fontWeight: 600 }}>Role</Box> {user?.role}
                </Box>
              </Box>
              {settings.map((setting) => (
                <MenuItem
                  key={setting.label}
                  onClick={() => handleSettingItemClick(setting.link)}
                >
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
