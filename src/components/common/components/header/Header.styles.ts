import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  block: {
    boxShadow: "0px 5px 20px 0px grey",
    backgroundColor: "#FFF",
    top: 0,
    zIndex: 1000,
  },
  sticky: {
    position: "fixed",
    top: 0,
    width: "100%",
  },
  root: {
    display: "flex",
    alignItems: "center",
  },
  menu: {
    width: 250,
    marginRight: 40,
    [theme.breakpoints.down("sm")]: {
      width: 125,
    },
  },
  navMenu: {
    width: "calc(100% - 290px)",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 165px)",
    },
  },
  pageInfo: {
    height: "100%",
    boxShadow: "5px 0px 20px 0px grey",
  },
  title: {
    fontSize: 25,
  },
  logoImg: {
    width: 167,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: 117,
      height: 67,
    },
  },
}));

export default useStyles;
