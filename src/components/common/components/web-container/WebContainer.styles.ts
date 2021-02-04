import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    minHeight: "100vh",
    height: "100%",
    flexDirection: "column",
  },
  webHeader: {
    flex: "0 1 auto",
  },
  scrolledDesktop: {
    paddingBottom: 100,
  },
  scrolledMobile: {
    paddingBottom: 71,
  },
  webBlock: {
    flex: "1 1 auto",
    margin: "50px 0",
    width: "100%",
  },
  webFooter: {
    height: 30,
  },
}));

export default useStyles;
