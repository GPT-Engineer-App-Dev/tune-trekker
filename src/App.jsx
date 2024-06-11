import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MusicPlayer from "./pages/MusicPlayer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/music-player" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
