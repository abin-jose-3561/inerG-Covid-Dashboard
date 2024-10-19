import Plot from "react-plotly.js";
import { Regional } from "../../shared/models/covid-patient-models";

interface IPlotlyLineProps {
  data: Regional;
}
const PlotlyLine = (props: IPlotlyLineProps) => {
  const { data } = props;
  const dates = data.datewiseCases.map((item) => item.date);
  const totalCases = data.datewiseCases.map((item) => item.totalCases);
  const activeCases = data.datewiseCases.map((item) => item.activeCases);
  const recovered = data.datewiseCases.map((item) => item.recovered);
  const deaths = data.datewiseCases.map((item) => item.deaths);

  return (
    <Plot
      data={[
        {
          x: dates,
          y: totalCases,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#87CEEB" },
          name: "Total Cases",
        },
        {
          x: dates,
          y: activeCases,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#2E8B57" },
          name: "Active Cases",
        },
        {
          x: dates,
          y: recovered,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#4682B4" },
          name: "Recovered Cases",
        },
        {
          x: dates,
          y: deaths,
          mode: "lines+markers",
          marker: { color: "#3CB371" },
          name: "Deaths",
        },
      ]}
      layout={{
        title: "COVID-19 Statistics",
        xaxis: { title: "Date", showgrid: false, zeroline: false },
        yaxis: { title: "Number of Cases" },
        height: 400,
        width: 900,
        margin: { t: 40, b: 40, l: 40, r: 40 },
      }}
    />
  );
};

export default PlotlyLine;
