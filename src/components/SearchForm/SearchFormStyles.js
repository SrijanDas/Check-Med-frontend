import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btns: {
    textTransform: "capitalize !important",
  },
  margin: {
    margin: theme.spacing(1),
  },
  searchBtn: {
    display: "flex",
  },
}));

export default useStyles;
