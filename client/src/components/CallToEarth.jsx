
import Globe from './globe';


export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row  justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
               Welcome To Bodesx Blog
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these tips about tech and everything in-between 
            </p>
            <div  className=' rounded-full text-sm px-2 py-2.5  mr-2 mb-2  '>
                <a href={'/search?category'}>
                    View more
                </a>
            </div>
           
        </div>
        <div className="p-7 flex-1">
           <Globe/>
        </div>
    </div>
  )
}