// MoodHistory.tsx
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS: Record<string, string> = {
  Happy: "#facc15",   // yellow
  Sad: "#60a5fa",     // blue
  Neutral: "#a3a3a3", // gray
  Excited: "#f472b6", // pink
  Angry: "#f87171",   // red
};

const MoodHistory = ({ history }: { history: string[] }) => {
  console.log("Mood history:", history);

  const moodCounts: Record<string, number> = {};
  history.forEach((mood) => {
    moodCounts[mood] = (moodCounts[mood] || 0) + 1;
  });

  const chartData = Object.keys(moodCounts).map((mood) => ({
    name: mood,
    value: moodCounts[mood],
  }));

  return (
    <div className=" w-[340px] mt-[5px]  bg-white shadow-md rounded-lg p-4 h-fit sticky top-6">
      <h2 className="text-md font-semibold text-indigo-700 mb-2">Recent Moods</h2>

      {history.length > 0 ? (
        <>
          <ul className="flex flex-wrap gap-2 mb-4">
            {history.map((mood, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
              >
                {mood}
              </li>
            ))}
          </ul>

          <h3 className="text-sm font-medium text-gray-700 mb-2">Mood Frequency</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name] || "#8884d8"} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p className="text-gray-500 text-sm">No mood history yet. Start by selecting a mood!</p>
      )}
    </div>
  );
};

export default MoodHistory;
