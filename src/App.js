import "./App.css";
import EvaluationForm from "./Components/EvaluationForm";
import Sidebar from "./Components/Environment/Sidebar";
import SideMenu from "./Components/Environment/SideMenu";
import { createUseStyles } from "react-jss";
import { useMediaQuery } from "react-responsive";

const useStyles = createUseStyles({
  mobileView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  uhoh: {
    fontWeight: 500,
    fontSize: 30,
  },
  mobileInfo: {
    marginTop: 20,
    marginBottom: 20,
  },
  signoff: {},
  container: {
    display: "flex",
    flexDirection: "row",
  },
  spaceHolderMenu: {
    minWidth: 125,
    visibility: "hidden",
  },
});

function App() {
  const classes = useStyles();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <div className="App">
      {isDesktopOrLaptop && (
        <div className={classes.container}>
          <Sidebar />
          <SideMenu />
          <div className={classes.spaceHolderMenu} />
          <EvaluationForm useCarousel={true} />
          <div className={classes.spaceHolderMenu} />
        </div>
      )}
      {!isDesktopOrLaptop && (
        <div className={classes.mobileView}>
          <div className={classes.uhoh}>Uh oh!</div>
          <div className={classes.mobileInfo}>
            Mobile view is unfortunately not within this project's scope.
            Please revisit this URL on a laptop or desktop computer.
          </div>

          <div className={classes.signoff}>Thanks, Viktor och Jens </div>
        </div>
      )}
    </div>
  );
}

export default App;
