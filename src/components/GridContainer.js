import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const GridContainer = ({ children }) => {
  return (
    <div>
      <Grid
        container
        sx={{ minHeight: { xs: "92vh", sm: "91vh" }, width: "100%" }}
      >
        {children}
      </Grid>
    </div>
  );
};

export default GridContainer;
