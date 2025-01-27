/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


export default function PostCard({ post }) {
  return (
    <div className='group flex flex-col items-center overflow-hidden rounded-lg sm:w-[430px] transition-all'>
        <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <Link to={`/post/${post.slug}`} className="inline-block my-1">
       <span className='italic text-sm'>{post.category}</span>
          <h2 className="font-semibold capitalize  text-base sm:text-lg">  
            <span
              className="bg-gradient-to-r from-red-500 to-blue-500  dark:from-red-400
              dark:to-green-400
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {post.title}
            </span>
          </h2>
          <h4 className="font-semibold capitalize  text-base sm:text-sm">
            <span
              className="bg-gradient-to-r from-accent/70 to-accent/70  dark:from-accentDark/70
              dark:to-accentDark/70
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {post.description}
            </span>
          </h4>
      </Link>
    </div>
  );
}