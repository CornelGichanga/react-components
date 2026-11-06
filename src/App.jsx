// import Header from ".compon/src/components/Header";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import { Courses } from "./Components/Courses";
import { Stats } from "./Components/Stats";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Courses />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;