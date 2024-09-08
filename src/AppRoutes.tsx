import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import PropsSample from "./pages/propsSample/PropsSample";
import StateSample from "./pages/stateSample/StateSample";
import CreatePortalSample from "./pages/createPortal/CreatePortalSample";
import UseRefSample from "./pages/useRef/UseRefSample";
import ForwardSample from "./pages/forwardRef/ForwardRefSample";
import UseEffectSample from "./pages/useEffect/UseEffectSample";
import UseLayoutEffectSample from "./pages/useLayoutEffect/UseLayoutEffectSample";
import Header from "./pages/Header";
import StyleSample from "./pages/styleSample/StyleSample";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/props" element={<PropsSample />} />
        <Route path="/state" element={<StateSample />} />
        <Route path="/modal" element={<CreatePortalSample />} />
        <Route path="/ref" element={<UseRefSample />} />
        <Route path="/forwardRef" element={<ForwardSample />} />
        <Route path="/effect" element={<UseEffectSample />} />
        <Route path="/layoutEffect" element={<UseLayoutEffectSample />} />
        <Route path="/style" element={<StyleSample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
