import { useState, useEffect } from "react";
import "../styles/homesection.css";
import MoodometerPage from "./Mood";
import MoodHistory from "./MoodHistory";
import AppSidebar from "./Sidebar";

const MoodoMeter = () => {
  const [moodHistory, setMoodHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("mood-history");
    if (storedHistory) {
      setMoodHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mood-history", JSON.stringify(moodHistory));
  }, [moodHistory]);

  return (
    <div className="homepage flex gap-6 p-4 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <div className="mr-[-10px]">
        <AppSidebar />
      </div>

      <section className="feed mr-[-10px]">
        <MoodometerPage moodHistory={moodHistory} setMoodHistory={setMoodHistory} />
      </section>
      <div className="flex lg:block mt-2 items-center  ml-6 justify-center ">
        <MoodHistory history={moodHistory} />
      </div>
    </div>
  );
};

export default MoodoMeter;
