import Plot from "react-plotly.js";
import { Regional } from "../../shared/models/covid-patient-models";
interface IPlotlyPieProps {
  data: Regional;
}
const PlotlyPie = (props: IPlotlyPieProps) => {
  const { data } = props;
  const colors = ["#87CEEB", "#3CB371", "#4682B4"];
  const data1 = [data.deaths, data.recovered, data.activeCases];
  return (
    <div>
      <Plot
        data={[
          {
            values: data1,
            labels: ["Death", "Recovered", "Active Cases"],
            type: "pie",
            marker: {
              colors: colors, // Assign custom colors here
            },
          },
        ]}
        layout={{
          title: "Covid-19 Case Distribution",
          height: 500,
          width: 500,
          margin: { t: 40, b: 40, l: 40, r: 40 },
        }}
      />
    </div>
  );
};

export default PlotlyPie;
