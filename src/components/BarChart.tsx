import { ResponsiveBar } from '@nivo/bar';
import {
  COLOR_GREY_50,
  COLOR_INDIGO_60,
  COLOR_PINK_60,
  COLOR_TEAL_60,
} from '../common/styles/Color';

const data = [
  {
    year: '2017',
    A: 10300,
    B: 3400,
    C: 6700,
  },
  {
    year: '2018',
    A: 14100,
    B: 8500,
    C: 6500,
  },
  {
    year: '2019',
    A: 5900,
    B: 4700,
    C: 3400,
  },
  {
    year: '2020',
    A: 5800,
    B: 18300,
    C: 13000,
  },
  {
    year: '2021',
    A: 13300,
    B: 4500,
    C: 19600,
  },
];

// 좌측 단위 Tick Label Custom Renderer
const LeftTick = (tick: any) => {
  const { x, y, value } = tick;
  const formatedValue = `${value / 1000}K`;

  return (
    <g transform={`translate(${x - 10},${y})`}>
      <text
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
        fontWeight={700}
        fill={COLOR_GREY_50}
      >
        {formatedValue}
      </text>
    </g>
  );
};

// x축 단위 Tick Label Custom Renderer
const BottomTick = (tick: any) => {
  const { x, y, value } = tick;

  return (
    <g transform={`translate(${x},${y + 22})`}>
      <text
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
        fontWeight={700}
      >
        {value}
      </text>
    </g>
  );
};

const BarChart = () => (
  <div style={{ width: '100%', height: 457 }}>
    <ResponsiveBar
      data={data}
      keys={['A', 'B', 'C']}
      indexBy="year"
      groupMode="grouped"
      innerPadding={2}
      borderRadius={5}
      enableLabel={false}
      margin={{ top: 0, right: 10, bottom: 30, left: 40 }}
      padding={0.1}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={[COLOR_INDIGO_60, COLOR_PINK_60, COLOR_TEAL_60]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        renderTick: BottomTick,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -40,
        renderTick: LeftTick,
      }}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[]}
      role="application"
      ariaLabel="Nivo bar chart demo"
    />
  </div>
);

export default BarChart;
