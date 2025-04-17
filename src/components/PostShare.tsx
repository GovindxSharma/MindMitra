import { useState, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import EmojiPicker from './EmojiPicker';

interface PostShareProps {
  onPostSubmit: (content: string) => void;
}

const PostShare = ({ onPostSubmit }: PostShareProps) => {
  const [postText, setPostText] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (postText.trim()) {
      onPostSubmit(postText);
      setPostText('');
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setPostText((prev) => prev + emoji);
  };

  return (
    <div className="">
    <div className="bg-gray-600 p-4 rounded-lg shadow-md mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start gap-3">
          {/* User Avatar */}
          <img 
            src="/linkedin.png" 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Post Input */}
          <div className="flex-1">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full border text-white border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex space-x-2">

                <EmojiPicker onSelect={handleEmojiSelect}/>
              </div>

              <button
                type="submit"
                disabled={!postText.trim()}
                className={`px-4 py-2 rounded-lg font-medium ${postText.trim() ? 'bg-purple-600 text-white cursor-pointer hover:bg-purple-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              >
                <FaPaperPlane size={16} className="inline mr-1" />
                Let it be out here!
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default PostShare;