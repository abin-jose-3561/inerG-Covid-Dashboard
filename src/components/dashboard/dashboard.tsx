import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../shared/store/store";
import { fetchCovidPatientStats } from "../../shared/store/covid-patient-store/covide-patient-store";
import PlotlyPie from "../plotly-charts/plotly-pie";
import { Regional } from "../../shared/models/covid-patient-models";
import PlotlyLine from "../plotly-charts/plotly-line";
import LeafletMaps from "../leaflet-maps/leaflet-maps";

const Dashboard = () => {
  const covidPatientStats = useSelector(
    (state: RootState) => state.covid.covidPatientStats
  );
  const dispatch = useDispatch<AppDispatch>();
  const [selectedState, setSelectedCity] = useState<Regional>();

  useEffect(() => {
    dispatch(fetchCovidPatientStats());
  }, [dispatch]);

  // console.log(selectedState);
  return (
    <div className="w-full">
      {covidPatientStats && (
        <div className="card flex justify-content-center">
          <Dropdown
            value={selectedState}
            onChange={(e) => setSelectedCity(e.value)}
            options={covidPatientStats.data.regional}
            optionLabel="loc"
            placeholder="Select a State"
            className="w-full md:w-24rem shadow-none"
          />
        </div>
      )}
      {selectedState && (
        <div className="flex gap-4">
          <PlotlyPie data={selectedState} />
          <PlotlyLine data={selectedState} />
        </div>
      )}

      <LeafletMaps />
    </div>
  );
};
export default Dashboard;
