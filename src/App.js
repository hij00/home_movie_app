import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { Sub1 } from "./components/pages/Sub1";
import { Sub2 } from "./components/pages/Sub2";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1" element={<Sub1 />} />
        <Route path="/sub2" element={<Sub2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
