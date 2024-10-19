import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store/store";
import { Regional } from "../../shared/models/covid-patient-models";
import { Dropdown } from "primereact/dropdown";
import PlotlyPie from "../plotly-charts/plotly-pie";
import PlotlyLine from "../plotly-charts/plotly-line";
import SummaryCard from "./summary-card";

const StatwiseAnalysis = () => {
  const covidPatientStats = useSelector(
    (state: RootState) => state.covid.covidPatientStats
  );

  const [selectedState, setSelectedCity] = useState<Regional | null>(
    covidPatientStats?.data.regional[0] ?? null
  );

  return (
    <div className="w-full">
      <div className="card flex gap-5 align-items-center pl-5 pb-2">
        <p className="text-lg font-semibold">
          StateWise Covid 19 Case Analysis
        </p>
        <Dropdown
          value={selectedState}
          onChange={(e) => setSelectedCity(e.value)}
          options={covidPatientStats ? covidPatientStats.data.regional : []}
          optionLabel="location"
          placeholder="Select a State"
          className="w-full md:w-24rem shadow-none"
        />
      </div>

      <div className="">
        {selectedState ? (
          <div className="flex justify-content-between">
            <div className=" w-7 flex flex-column gap-6">
              <PlotlyLine data={selectedState} />
              <div className="flex justify-content-around">
                <SummaryCard
                  title={"Total Cases Reported"}
                  value={selectedState.totalCases}
                  width="13rem"
                />
                <SummaryCard
                  title={"Active Cases"}
                  value={selectedState.activeCases}
                  width="13rem"
                />
                <SummaryCard
                  title={"Recovered"}
                  value={selectedState.recovered}
                  width="13rem"
                />
                <SummaryCard
                  title={"Deaths"}
                  value={selectedState.deaths}
                  width="13rem"
                />
              </div>
            </div>
            <PlotlyPie data={selectedState} />
          </div>
        ) : (
          <p className="flex justify-content-center text-xl font-semibold font-italic">
            Please select a state to view the analysis
          </p>
        )}
      </div>
    </div>
  );
};

export default StatwiseAnalysis;
