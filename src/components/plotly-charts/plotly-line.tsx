import Plot from "react-plotly.js";
import { Regional } from "../../shared/models/covid-patient-models";

interface IPlotlyLineProps {
  data: Regional;
}
const PlotlyLine = (props: IPlotlyLineProps) => {
  const { data } = props;
  const dates = data.datewiseCases.map((item) => item.date);
  const totalCases = data.datewiseCases.map(
    (item) => item.confirmedCasesIndian + item.deaths + item.discharged
  );
  const activeCases = data.datewiseCases.map(
    (item) => item.confirmedCasesIndian
  );
  const recovered = data.datewiseCases.map((item) => item.discharged);
  const deaths = data.datewiseCases.map((item) => item.deaths);
  console.log(data.datewiseCases, dates);

  return (
    <Plot
      data={[
        {
          x: dates,
          y: totalCases,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
          name: "Total Cases",
        },
        {
          x: dates,
          y: activeCases,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "green" },
          name: "Active Cases",
        },
        {
          x: dates,
          y: recovered,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "black" },
          name: "Recovered Cases",
        },
        {
          x: dates,
          y: deaths,
          mode: "lines+markers",
          marker: { color: "blue" },
          name: "Deaths",
        },
      ]}
      layout={{
        title: "COVID-19 Statistics",
        xaxis: { title: "Date" },
        yaxis: { title: "Number of Cases" },
        height: 400,
        width: 500,
        margin: { t: 40, b: 40, l: 40, r: 40 },
      }}
    />
  );
};

export default PlotlyLine;
