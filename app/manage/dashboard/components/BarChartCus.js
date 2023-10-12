import { BarChart, Bar, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page b", uv: 250, pv: 2400, amt: 2400 },
  { name: "Page c", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page d", uv: 600, pv: 2400, amt: 2400 },
  { name: "Page e", uv: 100, pv: 2400, amt: 2400 },
  { name: "Page f", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page g", uv: 160, pv: 2400, amt: 2400 },
];

function formatYAxis(value) {
  return value + "K";
}
function formatXAxis(value) {
  return value;
}

const BarChartCus = () => {
  return (
    <div style={{ height: 170, paddingTop: "24px" }}>
      <BarChart width={470} height={180} data={data}>
        <XAxis dataKey="name" tickFormatter={formatXAxis} />
        <YAxis tickFormatter={formatYAxis} />
        <Bar dataKey="uv" barSize={18} fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartCus;
