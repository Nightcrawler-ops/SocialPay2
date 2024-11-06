import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

export default function CreatePost() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-start space-x-4">
        <img
          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop&crop=faces"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full min-h-[100px] p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center mt-3">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <Image className="w-5 h-5" />
              <span>Add Photo</span>
            </button>
            <button
              disabled={!content.trim()}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}