import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import TargetCursor from '../components/targetmouse';
import RippleGrid from '@/components/runbg';
import FallingText from '@/components/fallintext';




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

 <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
  hoverDuration={0.2}
/>
  </div>
<div className='absolute inset-40 z-80 flex  items-center justify-center    p-48 px-4 sm:px-6 md:px-10'>
<FallingText
  text={`Navigating the Matrix .`}
  highlightWords={["Navigating", "Matrix", "Time", "components", "One"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>
</div>


<div className='absolute inset-0 z-0' style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
  <RippleGrid
    enableRainbow={false}
    gridColor="#5227FF"
    rippleIntensity={0.05}
    gridSize={10}
    gridThickness={15}
    mouseInteraction
    mouseInteractionRadius={0.8}
    opacity={1}
    fadeDistance={1.5}
    vignetteStrength={2}
    glowIntensity={0.1}
    gridRotation={0}
/>

      </div>



        
          
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
      
      </div>
    </div>
  );
}
