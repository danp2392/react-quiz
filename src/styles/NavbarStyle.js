import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navLink: {
    color: "white",
    fontWeight: 900,
    fontSize: "1.25rem",
    flex: 1,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
  navStyling: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.dark,
  },
}));
