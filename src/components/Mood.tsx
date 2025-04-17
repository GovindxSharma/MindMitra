import { useState, useEffect } from 'react';
import { Smile, Frown, Meh, Laugh, Angry, Info, Heart } from 'lucide-react';


interface Props {
    moodHistory: string[];
    setMoodHistory: React.Dispatch<React.SetStateAction<string[]>>;
  }

const moods = [
  { label: 'Happy', icon: <Smile className="w-10 h-10 text-yellow-400" /> },
  { label: 'Sad', icon: <Frown className="w-10 h-10 text-blue-400" /> },
  { label: 'Neutral', icon: <Meh className="w-10 h-10 text-gray-400" /> },
  { label: 'Excited', icon: <Laugh className="w-10 h-10 text-pink-400" /> },
  { label: 'Angry', icon: <Angry className="w-10 h-10 text-red-500" /> },
];

const moodTips: Record<string, string> = {
  Happy: 'Keep spreading positivity and joy! 😊',
  Sad: "It's okay to feel down. Try reaching out to a friend. 💙",
  Neutral: 'Take a walk or listen to music to lift your mood. 🎧',
  Excited: 'Channel that energy into something creative! 🔥',
  Angry: 'Take deep breaths or write it out. You got this. 🧘',
};


const getTodayKey = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

 const MoodometerPage: React.FC<Props> = ({ moodHistory, setMoodHistory }) => {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
    const handleMoodSelect = (mood: string) => {
      setSelectedMood(mood);
      setMoodHistory((prev) => [mood, ...prev.slice(0, 19)]);
    };

  const [hasSelectedToday, setHasSelectedToday] = useState(false);


  useEffect(() => {
    const storedHistory = localStorage.getItem('mood-history');
    const storedToday = localStorage.getItem('mood-today');
    if (storedHistory) setMoodHistory(JSON.parse(storedHistory));
    if (storedToday === getTodayKey()) setHasSelectedToday(true);
  }, []);


  useEffect(() => {
    localStorage.setItem('mood-history', JSON.stringify(moodHistory));
  }, [moodHistory]);




  return (
    <div className="h-[85.7vh] -mt-1 rounded-lg w-[720px] bg-gradient-to-b from-indigo-300 to-purple-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-indigo-800 mb-2">Moodometer</h1>
      <p className="text-gray-800 mb-6 text-center max-w-md">
        Track your emotions and gain insight into your daily moods. Click on an icon that best describes how you're feeling right now.
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        {moods.map((mood) => (
          <button
          key={mood.label}
          onClick={() => handleMoodSelect(mood.label)}
          disabled={hasSelectedToday}
          className={`flex flex-col items-center gap-2 p-4 rounded-xl shadow-md transition-all 
            ${selectedMood === mood.label ? 'bg-indigo-200' : 'bg-white'} 
            ${hasSelectedToday ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
        >
          {mood.icon}
          <span className="text-sm font-medium text-gray-700">{mood.label}</span>
        </button>
        ))}
      </div>

      {selectedMood && (
        <div className="mt-8 text-center max-w-md">
        <p className="text-lg text-indigo-700 mb-2">
          You selected: <strong>{selectedMood}</strong>
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-white rounded-md p-3 shadow">
          <Info className="w-4 h-4 text-indigo-500" />
          <span>{moodTips[selectedMood]}</span>
        </div>
      </div>
      )}

      {moodHistory.length > 0 && (
        <div className="mt-10 w-full max-w-md bg-white shadow-md rounded-lg p-4">
          <h2 className="text-md font-semibold text-indigo-700 mb-2">Recent Moods</h2>
          <ul className="flex gap-3 flex-wrap">
            {moodHistory.map((mood, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
              >
                {mood}
              </li>
            ))}
          </ul>
        </div>
      )}

      <footer className="mt-16 text-center text-gray-400 text-xs">
        <p className="flex items-center text-sm justify-center gap-1 text-black">
          <Heart className="w-6 h-6 fill-pink-400 text-pink-400" /> Made with care for your emotional well-being.
        </p>
      </footer>
    </div>
  );
}

export default MoodometerPage

