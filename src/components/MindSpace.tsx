import { useMemo } from "react";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

const journalPrompts = [
    "What are you letting go of today?",
    "Describe a small joy you experienced this week.",
    "What are you avoiding, and why?",
    "Write a message to your future self.",
    "What does healing look like for you?",
];

const anonymousThoughts = [
    "I hope I'm not the only one feeling this.",
    "Today I did my best, even if it wasn't perfect.",
    "I feel invisible sometimes.",
    "I'm proud of myself for getting out of bed.",
    "I just want someone to understand.",
];

const backgroundQuotes = [
    {
        quote: "You are not alone.",
    },
    {
        quote: "This too shall pass.",
    },
    {
        quote: "Breathe. You're doing okay.",
    },
    {
        quote: "Good time is on its way.",
    },
];

const MindSpace = () => {
    const today = new Date().getDate();
    const dailyPrompt = journalPrompts[today % journalPrompts.length];

    const randomThoughts = useMemo(() => {
        const shuffled = [...anonymousThoughts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    }, []);

    const background = useMemo(() => {
        return backgroundQuotes[Math.floor(Math.random() * backgroundQuotes.length)];
    }, []);

    return (
        <div className="w-full max-w-sm bg-gradient-to-r mt-4 from-blue-900 to-purple-800  rounded-xl shadow-md p-4 space-y-4">


            <div className="relative inset-0 bg-gray-800/60 h-40 rounded-md border  flex items-center justify-center p-4">
                <p className="text-white text-center text-lg italic">{background.quote}</p>
            </div>


            <div>
                <h3 className="text-cyan-500 text-sm uppercase tracking-wide">Journal Prompt</h3>
                <p className="text-white dark:text-white font-medium">{dailyPrompt}</p>
            </div>

            <div className="">
                <div>
                    <h3 className="text-purple-300 text-sm uppercase tracking-wide mb-1">Floating Thoughts</h3>
                    {randomThoughts.map((thought, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 italic mb-2"
                        >
                            “{thought}”

                        </div>


                    ))}
                </div>
                <h3 className="text-white mt-6 text-sm relative uppercase tracking-wide mb-1">What's your thoughts?</h3>
                <Input placeholder="share your thought"/>  
                <Send size={18} className="absolute cursor-pointer right-26 mt-[-26px]"/>  
                    </div>
            </div>
    );
};

export default MindSpace;