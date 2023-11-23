import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
const colors = [
  "#F66A6A",
  "#1FCBA2",
  "#FFB34B",
  "#3F3F3F",
  "#7CD4FD",
  "#828282",
];
function formatYAxis(value) {
  return value + "M";
}
function formatXAxis(value) {
  return value;
}

const BarChartCus = ({ data }) => {
  return (
    <div style={{ height: 170, paddingTop: "24px" }}>
      <BarChart width={470} height={180} data={data}>
        <XAxis dataKey="label" tickFormatter={formatXAxis} />
        <YAxis tickFormatter={formatYAxis} />
        <Bar dataKey="total" barSize={18} fill="#8884d8">
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default BarChartCus;
