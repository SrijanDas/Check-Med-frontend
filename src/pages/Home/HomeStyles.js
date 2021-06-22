import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homePage: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    marginBottom: theme.spacing(8),
    justifyContent: "center",
  },
}));

export default useStyles;
