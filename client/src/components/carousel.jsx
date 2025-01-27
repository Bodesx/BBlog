import { useState } from 'react'

function Carousel() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  
  const panels = [
    {  image: "https://i.pinimg.com/564x/71/87/10/718710ca800cac1614c8b8fad032bda3.jpg" },                    
    {  image: "https://i.pinimg.com/564x/e1/5c/44/e15c44e4c4cd5f83c237cc4ea90afb19.jpg" },                    
    {  image: "https://i.pinimg.com/736x/52/85/cd/5285cd9f10f64a810dcc95152d046128.jpg" },                   
    {  image: "https://i.pinimg.com/736x/5b/0c/6a/5b0c6a9ae27f9b96e810d9410b29d9d3.jpg" },        
    {  image: "https://i.pinimg.com/736x/bd/99/76/bd9976c21f52db379fc4d35955c48712.jpg" }           
  ];

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <main className=" overflow-hidden">
      <div className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative" 
       
      >
        <div className="inset-0 absolute backdrop-blur-md z-0"></div>
      <div className="flex  max-w-3xl h-[50vh] gap-2 items-center justify-center z-10">
        {panels.map((panel, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`
              h-full rounded-2xl bg-white cursor-pointer
              transition-all duration-500 ease-in-out overflow-hidden
              ${expandedIndex === index ? 'w-[50%]' : 'w-[10%] hover:bg-gray-200'}
              min-w-[40px] block
            `}
          >
            <img src={panel.image} alt="" className='w-full h-full object-cover object-top'/>
          </div>
        ))}
      </div>
      </div>
    </main>
  )
}

export default Carousel