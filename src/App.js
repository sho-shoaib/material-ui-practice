import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import GridContainer from "./components/GridContainer";

function App() {
  return (
    <>
      <Navbar />
      <GridContainer>
        <Leftbar />
        <Feed />
        <Rightbar />
      </GridContainer>
    </>
  );
}

export default App;
