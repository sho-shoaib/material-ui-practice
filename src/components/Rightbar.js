import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const Rightbar = () => {
  const theme = useTheme();
  const mdBreak = useMediaQuery(theme.breakpoints.up("md"));
  const lgBreak = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      item
      xs={0}
      md={3}
      sx={{ display: { xs: "none", md: "inline-block" } }}
    >
      <Box
        sx={{
          pt: 3,
          pb: 3,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 400 }}>
            Online friends
          </Typography>
          <AvatarGroup max={4} sx={{ alignSelf: "flex-start" }}>
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Avatar
              alt='Travis Howard'
              src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Avatar
              alt='Cindy Baker'
              src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Avatar
              alt='Agnes Walker'
              src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Avatar
              alt='Trevor Henderson'
              src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />
          </AvatarGroup>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant='h6' sx={{ fontWeight: 400 }}>
            Gallery
          </Typography>
          <ImageList
            sx={{ width: "100%", height: 450 }}
            cols={(lgBreak && 2) || (mdBreak && 1)}
            rowHeight={124}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Grid>
  );
};

export default Rightbar;
