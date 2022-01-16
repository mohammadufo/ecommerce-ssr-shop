import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10,
      TextDecoder: "none",
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textDecoration: "none",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
    marginTop: 10,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#fff",
    textTransform: "initial",
  },
  transparentBackgroud: {
    backgroundColor: "transparent",
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
});

export default useStyles;
