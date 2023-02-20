import { Typography } from "@mui/material";

export const Title = ({ children, Variant, Component , MarginTop}) =>  {
    return (
      <Typography variant={Variant} component={Component} mt= {MarginTop}>
        {children}
      </Typography>
    );
  }