import React from 'react';
import { Heart, MessageCircle, Send, DollarSign } from 'lucide-react';
import type { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-start space-x-4">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces"
          alt="User avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">•••</button>
          </div>
          
          <p className="mt-2">{post.content}</p>
          
          {post.image && (
            <img
              src={post.image}
              alt="Post content"
              className="mt-3 rounded-lg w-full object-cover max-h-96"
            />
          )}
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
                <Send className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-1 text-white bg-gradient-to-r from-blue-600 to-green-500 px-3 py-1 rounded-full hover:opacity-90">
                <DollarSign className="w-4 h-4" />
                <span>Send Money</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}