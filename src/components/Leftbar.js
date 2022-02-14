import { Box, Button, Grid } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const items = [
  { icon: <HomeIcon />, text: "Homepage" },
  { icon: <PeopleAltIcon />, text: "Friends" },
  { icon: <FormatListBulletedIcon />, text: "List" },
  { icon: <CameraAltIcon />, text: "Camera" },
  { icon: <VideoLibraryIcon />, text: "Videos" },
  { icon: <PhoneAndroidIcon />, text: "Apps" },
  { icon: <BookmarkIcon />, text: "Collections" },
  { icon: <InventoryIcon />, text: "Marketplace" },
  { icon: <SettingsIcon />, text: "Settings" },
  { icon: <LogoutIcon />, text: "Logout" },
];

const Leftbar = () => {
  const theme = useTheme();
  const mdBreak = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid
      item
      xs={1.5}
      sm={2}
      sx={{
        borderRight: 1,
        borderColor: "grey.400",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          pb: 10,
          height: "90vh",
        }}
      >
        {items.map((item) => {
          return (
            <Button
              variant='text'
              disableElevation
              sx={{ width: "100%", flexGrow: 1, borderRadius: 0 }}
              startIcon={mdBreak && item.icon}
            >
              {mdBreak ? item.text : item.icon}
            </Button>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Leftbar;
