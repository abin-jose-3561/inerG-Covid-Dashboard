import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../shared/store/store";
import { fetchCovidPatientStats } from "../../shared/store/covid-patient-store/covide-patient-store";
import LeafletMaps from "../leaflet-maps/leaflet-maps";
import StatwiseAnalysis from "./statwise-analysis";
import SummaryCard from "./summary-card";

const Dashboard = () => {
  const covidPatientStats = useSelector(
    (state: RootState) => state.covid.covidPatientStats
  );
  const dispatch = useDispatch<AppDispatch>();
  const [showAnalysis, setShowAnalysis] = useState(false);
  useEffect(() => {
    dispatch(fetchCovidPatientStats());
  }, [dispatch]);

  const handleButtonClick = () => {
    setShowAnalysis(true);
  };
  return (
    <div className="w-full">
      {!showAnalysis ? (
        <div className="card flex justify-content-between align-items-center pb-2">
          <LeafletMaps />

          <div className="flex flex-column gap-4 px-2">
            <SummaryCard
              title={"Total Cases Reported"}
              value={covidPatientStats?.data.summary.totalCases ?? 0}
            />
            <SummaryCard
              title={"Active Cases"}
              value={covidPatientStats?.data.summary.activeCases ?? 0}
            />
            <SummaryCard
              title={"Recovered"}
              value={covidPatientStats?.data.summary.recovered ?? 0}
            />
            <SummaryCard
              title={"Deaths"}
              value={covidPatientStats?.data.summary.deaths ?? 0}
            />

            <Button
              label="Click to view State-wise analysis"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      ) : (
        <StatwiseAnalysis />
      )}
    </div>
  );
};
export default Dashboard;
