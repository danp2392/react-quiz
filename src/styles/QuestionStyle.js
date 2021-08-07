import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  questionBox: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: theme.palette.primary.main,
    border: "5px inset",
    cursor: "default",
  },
  answerDiv: {
    textAlign: "center",
    margin: 0,
    cursor: "default",
    backgroundColor: theme.palette.secondary,

    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
}));
