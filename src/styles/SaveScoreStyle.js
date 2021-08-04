import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  saveButton: {
    lineHeight: "6rem",
    fontSize: "2rem",
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
  scoreText: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));
