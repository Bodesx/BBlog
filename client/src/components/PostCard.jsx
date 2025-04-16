/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import "../card.css";


export default function PostCard({ post }) {
  return (
    <div className="card bg-cover">
       <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
    <div className="card-content">
      <h2 className="card-title"> {post.title}</h2>
      <p className="card-body">
       {post.description}
      </p>
      <a href={`/post/${post.slug}`} className="button">
        Learn More
      </a>
    </div>
  </div>
  );
}


 