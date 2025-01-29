import { Link } from 'react-router-dom';
import CallToEarth from '../components/CallToEarth';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import FuzzyOverlayExample from '../components/fuxxyhero';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className=''>
        <p></p>
  {/**    <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
        */}   
      </div>
      <div className=''>
        <FuzzyOverlayExample/>
      </div>

      <div className='max-w-6xl mx-auto p-9 flex flex-col gap-10 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <div className='hidden sm:inline'>
      <CallToEarth/>
      </div>
    </div>
  );
}
