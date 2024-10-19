interface SummaryCardProps {
  title: string;
  value: number;
  width?: string;
}
const SummaryCard = (props: SummaryCardProps) => {
  const { title, value, width } = props;

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
