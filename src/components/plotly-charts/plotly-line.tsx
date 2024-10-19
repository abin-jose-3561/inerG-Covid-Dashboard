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
          marker: { color: "#4682B4" },
          name: "Total Cases",
        },
        {
          x: dates,
          y: activeCases,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#b23900" },
          name: "Active Cases",
        },
        {
          x: dates,
          y: recovered,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "#228B22" },
          name: "Recovered Cases",
        },
        {
          x: dates,
          y: deaths,
          mode: "lines+markers",
          marker: { color: "#003366" },
          name: "Deaths",
        },
      ]}
      layout={{
        title: "COVID-19 Statistics from Oct 10 - Oct 14",
        xaxis: {
          title: "Date",
          showgrid: false,
          zeroline: false,
          tickformat: "%b %d, %Y",
          dtick: "D1",
        },
        yaxis: {
          title: "Number of Cases",
          automargin: true,
        },
        height: 400,
        width: 1000,
        margin: { t: 40, b: 40, l: 40, r: 40 },
      }}
    />
  );
};

export default PlotlyLine;
