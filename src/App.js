import LoginPage from "./components/LoginPage/LoginPage";
import ScenariosPage from "./components/ScenariosPage/ScenariosPage";
import ScenarioDetailsPage from "./components/ScenarioDetailsPage/ScenarioDetailsPage";
import CompareScenariosPage from "./components/CompareScenariosPage/CompareScenariosPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/scenarios-page" element={<ScenariosPage/>}/>
        <Route path="/scenario-details-page" element={<ScenarioDetailsPage/>}/>
        <Route path="/compare-scenarios-page" element={<CompareScenariosPage/>} />
      </Routes>
    </div>
  );
}

export default App;
