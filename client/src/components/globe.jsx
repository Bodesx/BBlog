// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Earth from './earth1';
import Earth2 from './earth2';

const Globe = () => {
   

    return ( 
        <div className='overflow-hidden relative'>
            <div className='mx-auto relative z-[2]'>
                <div className='flex my-8 md:my-12 sm:my-12 relative md:items-center text-center flex-col'>
                    <div className='py-3 mb-2 flex flex-col justify-center items-center'>
                        
                      
                    </div>
                </div>
            </div>
            <div className={`relative z-[2] max-sm:hidden mt-[-100px]`}> 
                <Earth />
            </div>
            <div className={`relative z-[2] sm:hidden`}> 
                <Earth2 />
            </div>
           
        </div>
    );
}

export default Globe;
