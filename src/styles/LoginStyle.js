import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  loginDiv: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },

  login: {
    lineHeight: "5rem",
    margin: "20px",
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    fontSize: "2.5rem",
    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
  reactLogo: {
    display: "block",
    margin: "0 auto",
    animation: "$reactSpin infinite 10s linear",
  },
  "@keyframes reactSpin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));
