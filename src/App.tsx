import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./components/dashboard/dashboard";
import StatwiseAnalysis from "./components/dashboard/statwise-analysis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statewise-analysis" element={<StatwiseAnalysis />} />
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
