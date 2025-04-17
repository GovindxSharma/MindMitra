import  { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

type Props = {
  onSelect: (emoji: string) => void;
};

const EmojiPicker = ({ onSelect }: Props) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative inline-block">
      <button onClick={() => setShowPicker((prev) => !prev)}
        className='bg-gray-500 p-2 rounded-full cursor-pointer hover:bg-gray-600'
        >
        😊 
      </button>
      {showPicker && (
        <div className="absolute z-50 mt-2">
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => {
              onSelect(emoji.native);
              setShowPicker(false); // close picker after selection
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;