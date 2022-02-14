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
    img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1573067485648-4cb2618b5e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1615484477201-9f4953340fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1553395572-0ef353a212bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
