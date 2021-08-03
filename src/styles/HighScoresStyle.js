import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  text: {
    backgroundColor: theme.palette.secondary.main,
  },
  score: {
    backgroundColor: theme.palette.secondary,
    textAlign: "center",
  },
  scores: {
    borderRadius: "0.5rem",

    padding: "3px",
    backgroundColor: theme.palette.primary.dark,
    border: "3px outset",
  },
}));
