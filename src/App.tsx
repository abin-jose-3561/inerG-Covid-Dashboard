import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import LeafletMaps from "./components/leaflet-maps/leaflet-maps";
import PlotlyPie from "./components/plotly-charts/plotly-pie";
import PlotlyLine from "./components/plotly-charts/plotly-line";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<LeafletMaps />} />
        {/* <Route path="/plotly" element={<PlotlyPie />} /> */}
        {/* <Route path="/line" element={<PlotlyLine />} /> */}
        <Route path="/count" element={<Dashboard />} />
        <Route
          path="/*"
          element={
            <div className="flex align-items-center justify-content-between text-xl">
              Page Not Fount
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
