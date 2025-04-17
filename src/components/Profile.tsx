import React, { useState } from 'react';
import { Settings, UploadCloud } from 'lucide-react';
import Post from './Post';
import { Link } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  bio: string;
  profilePic: string;
  bannerImage: string;
}

const mockUser: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Full Stack Developer. Coffee enthusiast.',
  profilePic: '/linkedin.png',
  bannerImage: '/banner.jpg',
};

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [showPosts, setShowPosts] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleViewPosts = () => setShowPosts(!showPosts);
  const handleSave = () => setShowSettings(false);

  return (
    <div className="relative shadow-lg rounded-lg w-[720px] overflow-hidden">
      {/* Banner */}
      <div className="relative">
        <img src={user.bannerImage} alt="Banner" className="w-full h-48 object-cover" />
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-28 h-28 rounded-full absolute left-2 -bottom-14"
        />

        {/* Settings Icon */}
        <button
          onClick={() => setShowSettings(true)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          <Settings className="w-5 h-5 cursor-pointer text-gray-700" />
        </button>
      </div>

      <div className="pt-14 px-6 pb-6 bg-white">
        <h2 className="text-xl text-black font-semibold ">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2 text-sm text-gray-800">{user.bio}</p>

        <button
          onClick={handleViewPosts}
          className="mt-4 bg-purple-700 cursor-pointer text-white px-4 py-2 rounded hover:bg-purple-900"
        >
          {showPosts ? 'Hide User Thoughts' : 'View User Thoughts'}
        </button>
      </div>

      {showPosts && (
        <div className="mt-2 px-6 pb-4">
          <h3 className="text-lg font-semibold mb-2">User Thoughts</h3>
          <Post />
          <Post />
          <Post />
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-200 p-6 shadow-lg relative">
            <h3 className="text-lg font-semibold mb-4 text-black">Edit Profile Info</h3>

            {/* Profile Image */}
            <label className="block text-sm font-medium text-blue-600 mb-1">Profile Image</label>
            <div className="flex items-center gap-3 mb-4">
              <img src={user.profilePic} alt="Preview" className="w-12 h-12 rounded-full object-cover" />
              <button
                onClick={() => document.getElementById('profile-upload')?.click()}
                className="flex items-center gap-1 px-3 py-2 bg-gray-500 hover:bg-gray-600 cursor-pointer text-sm rounded"
              >
                <UploadCloud className="w-4 h-4" />
                Upload
              </button>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setUser((prev) => ({ ...prev, profilePic: reader.result as string }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>

            {/* Banner Image */}
            <label className="block text-blue-600 text-sm font-medium mb-1">Banner Image</label>
            <div className="flex items-center gap-3 mb-4">
              <img src={user.bannerImage} alt="Preview" className="w-24 h-12 object-cover rounded" />
              <button
                onClick={() => document.getElementById('banner-upload')?.click()}
                className="flex items-center gap-1 px-3 py-2 bg-gray-500 hover:bg-gray-600 cursor-pointer text-sm rounded"
              >
                <UploadCloud className="w-4 h-4" />
                Upload
              </button>
              <input
                type="file"
                id="banner-upload"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setUser((prev) => ({ ...prev, bannerImage: reader.result as string }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>

            {/* Editable Fields */}
            <div>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full text-black mb-3 p-2 border rounded"
              placeholder="Name"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full text-black mb-3 p-2 border rounded"
              placeholder="Email"
            />
            <textarea
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              className="w-full resize-none text-black mb-4 p-2 border rounded"
              placeholder="Bio"
              rows={3}
            />

            {/* Buttons */}
            <div className="flex justify-start space-y-2">
              <Link to="/forgot-password">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 cursor-pointer"
              >
                Forgot Password?
              </button>
              </Link>
              </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
