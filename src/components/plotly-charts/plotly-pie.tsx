import Plot from "react-plotly.js";
import { Regional } from "../../shared/models/covid-patient-models";
interface IPlotlyPieProps {
  data: Regional;
}
const PlotlyPie = (props: IPlotlyPieProps) => {
  const { data } = props;
  return (
    <div>
      <Plot
        data={[
          {
            values: [data.activeCases, data.recovered, data.deaths],
            labels: ["Active Cases", "Recovered", "Death"],
            type: "pie",
          },
        ]}
        layout={{
          title: "COVID-19 Statistics",
          height: 300,
          width: 500,
          margin: { t: 40, b: 40, l: 40, r: 40 },
        }}
      />
    </div>
  );
};

export default PlotlyPie;
