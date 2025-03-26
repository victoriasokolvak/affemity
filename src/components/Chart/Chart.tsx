import { BAR_RADIUS, BAR_SIZE, colors, DOT_BORDER_WIDTH, DOT_END_COLOR, DOT_RADIUS, DOT_START_COLOR, LINE_COLOR, LINE_REFERENCES, LINE_STROKE_WIDTH, REFERENCE_LINE_COLOR } from '../../constants/chartData';
import styles from './Chart.module.css';
import { Bar, Cell, ComposedChart, Line, ReferenceLine, ResponsiveContainer } from "recharts";

const data = [
  { value: 13, lineValue: 13 },
  { value: 19, lineValue: 16 },
  { value: 25, lineValue: 21 },
  { value: 31, lineValue: 28 },
  { value: 38, lineValue: 38 },
];

export const Chart = () => {
  return (
    <div className={styles.chart}>
      <p className={styles.text}>
        Take a quiz to get <br /> a personalized plan
      </p>

      <div>
        <div className={styles.label_left}>You</div>
        <div className={styles.label_right}>Goal</div>
      </div>

      <div className={styles.container}>
        <ResponsiveContainer>
          <ComposedChart data={data}>
            {LINE_REFERENCES.map((line, index) => (
              <ReferenceLine key={index} y={line} stroke={REFERENCE_LINE_COLOR} />
            ))}
            <Bar dataKey="value" radius={BAR_RADIUS} barSize={BAR_SIZE}>
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Bar>
            <Line
              type="monotone"
              dataKey="lineValue"
              stroke={LINE_COLOR}
              strokeWidth={LINE_STROKE_WIDTH}
              dot={(props) => {
                const { cx, cy, index } = props;
                if (index !== 0 && index !== data.length - 1) {
                  return <></>;
                }
                return (
                  <circle
                    key={index}
                    cx={cx}
                    cy={cy}
                    r={DOT_RADIUS}
                    fill={index === 0 ? DOT_START_COLOR : DOT_END_COLOR}
                    stroke="white"
                    strokeWidth={DOT_BORDER_WIDTH}
                  />
                );
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.weeks}>
        <p className={styles.week}>Week 1</p>
        <p className={styles.week}>Week 4</p>
      </div>
    </div>
  );
};
