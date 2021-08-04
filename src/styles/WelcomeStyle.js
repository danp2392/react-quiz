import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  menu: {
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: theme.palette.secondary,
  },
  option: {
    lineHeight: "6rem",
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    fontSize: "2rem",
    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
}));
