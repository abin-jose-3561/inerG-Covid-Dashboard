import { useSelector } from "react-redux";
import { RootState } from "../../shared/store/store";

interface SummaryCardProps {
  title: string;
  value: number;
  width?: string;
}
const SummaryCard = (props: SummaryCardProps) => {
  const { title, value, width } = props;
  const covidPatientStats = useSelector(
    (state: RootState) => state.covid.covidPatientStats
  );

  //   const percentageCal = () => {
  //     if (!covidPatientStats) return;
  //     switch (title) {
  //       case "Total Cases Reported":
  //         return (value / covidPatientStats.data.summary.totalCases) * 100;
  //       case "Active Cases":
  //         return (value / covidPatientStats.data.summary.activeCases) * 100;
  //       case "Recovered":
  //         return (value / covidPatientStats.data.summary.recovered) * 100;
  //       case "Deaths":
  //         return (value / covidPatientStats.data.summary.deaths) * 100;
  //     }
  //   };
  return (
    <div
      className="h-5rem surface-400 flex flex-column justify-content-center align-items-center border-round-lg"
      style={{ width: width ? width : "22rem" }}
    >
      <span>{title}</span>
      <span></span>
      <span className="text-xl font-bold text-green-700">
        {value.toLocaleString()}
      </span>
    </div>
  );
};

export default SummaryCard;
