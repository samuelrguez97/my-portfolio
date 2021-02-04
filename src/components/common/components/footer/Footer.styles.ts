import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerBlock: {
    backgroundColor: "#fff",
    width: "100%",
    boxShadow: "0px 3px 20px 0px",
  },
  footerContainer: {
    width: "100%",
    height: "100%",
    color: "#5656ef",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  logoImg: {
    width: 117,
    height: 67,
  },
  footerItem: {
    display: "flex",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
    },
  },
  mailBlock: {
    display: "flex",
  },
  mailText: {
    marginLeft: 5,
  },
}));

export default useStyles;
