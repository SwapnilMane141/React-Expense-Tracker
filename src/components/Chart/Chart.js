import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((element) => element.value);
  const totalMaximum = Math.max(...dataPointValues);

  console.log(dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((element) => (
        <ChartBar
          key={element.label}
          value={element.value}
          maxValue={totalMaximum}
          label={element.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
