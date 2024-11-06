import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';

const samplePosts = [
  {
    id: '1',
    userId: '1',
    content: 'Just had an amazing dinner at the new restaurant downtown! 🍽️',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    likes: 24,
    comments: 5,
    timestamp: new Date(),
  },
  {
    id: '2',
    userId: '2',
    content: 'Big announcement coming soon! Stay tuned... 🚀',
    likes: 15,
    comments: 3,
    timestamp: new Date(),
  },
  {
    id: '3',
    userId: '3',
    content: 'Beautiful sunset at the beach today 🌅',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    likes: 42,
    comments: 8,
    timestamp: new Date(),
  },
];

export default function Feed() {
  return (
    <div className="space-y-6">
      <CreatePost />
      {samplePosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}