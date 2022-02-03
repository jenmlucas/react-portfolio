import "./App.css";
import Nav from "./components/Nav/PortfolioContainer";
import Footer from "./components/Footer/Footer";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
root: {
  backgroundColor: "#87CEEB"
}
})

function App() {
   const classes = useStyles();
  return (
    <div className={classes.root}>
      <main>
      <Nav></Nav>
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
