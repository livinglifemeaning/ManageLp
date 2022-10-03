import { createContext } from "react";
import useMediaQuery from "./useMediaQuery";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Pattern from "./bg-tablet-pattern.svg";
export const MediaContext = createContext();

function App() {
  const isDesktop = useMediaQuery("(min-width: 750px)");
  return (
    <main>
      <MediaContext.Provider value={isDesktop}>
        <Header />
        <Body />
        <Footer />
        <img src={Pattern} className="pattern pattern1" alt="" />
        <img src={Pattern} className="pattern pattern2" alt="" />
      </MediaContext.Provider>
    </main>
  );
}

export default App;
