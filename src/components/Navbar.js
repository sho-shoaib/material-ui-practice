import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Box } from "@mui/system";

const pages = ["Search", "Account"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='h5'>Material</Typography>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            alignItems: "center",
            borderRadius: 1,
            pr: 1,
            pl: 2,
          }}
        >
          <InputBase sx={{ color: "white" }} placeholder='Search' />
          <IconButton sx={{ color: "white" }}>
            <SearchOutlinedIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Badge badgeContent={4} color='error'>
            <MailIcon color='white' />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <NotificationsIcon color='white' />
          </Badge>
          <Avatar />
        </Box>

        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Badge badgeContent={4} color='error'>
            <MailIcon color='white' />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <NotificationsIcon color='white' />
          </Badge>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
