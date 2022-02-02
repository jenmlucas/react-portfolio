import "./App.css";
import Nav from "./components/Nav/PortfolioContainer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
root: {
  backgroundColor: "#87CEEB"
}

})

function App() {
   const classes = useStyles();
  return (
    <div>
      <main className={classes.root}>
      <Nav></Nav>
      </main>
    </div>
  );
}

export default App;
