import Plot from "react-plotly.js";
import { Regional } from "../../shared/models/covid-patient-models";
interface IPlotlyPieProps {
  data: Regional;
}
const PlotlyPie = (props: IPlotlyPieProps) => {
  const { data } = props;
  return (
    <Plot
      data={[
        {
          values: [data.confirmedCasesIndian, data.discharged, data.deaths],
          labels: ["Active Cases", "Recovered", "Death"],
          type: "pie",
        },
      ]}
      layout={{
        title: "COVID-19 Statistics",
        height: 400,
        width: 500,
        margin: { t: 40, b: 40, l: 40, r: 40 },
      }}
    />
  );
};

export default PlotlyPie;
