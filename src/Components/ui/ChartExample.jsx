import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/tailgrids/core/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

export const ChartExample = () => {
  const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 }
  ];

  return (
    <ChartContainer initialDimension={{ width: 280, height: 160 }}>
      <AreaChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent indicator="square" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area dataKey="uv" stroke="#3758F9" fill="#3758F9" />
      </AreaChart>
    </ChartContainer>
  );
};