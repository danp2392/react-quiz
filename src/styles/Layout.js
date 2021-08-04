import { makeStyles } from "@material-ui/core";
import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "relative",
    paddingBottom: "20px",

    width: "800px",
    paddingTop: "20px",
    maxWidth: "80%",
  },
  mainBox: {
    textTransform: "uppercase",
    textAlign: "center",

    borderRadius: "1rem",
    border: "5px outset",
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box boxShadow={4} className={classes.mainBox}>
          {children}
        </Box>
      </Container>
    </div>
  );
};
