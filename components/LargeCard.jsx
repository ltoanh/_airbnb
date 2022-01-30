import Image from 'next/image';
import React from 'react';

function LargeCard({item}) {
  return (
    <section className='relative py-16'>
      <div className='relative h-[400px] min-w-[200px]'>
        <Image className='rounded-2xl' src={item.img} alt={item.title} layout='fill' objectFit='cover' />
      </div>
      <div className='absolute top-1/2 left-10'>
        <h4 className='font-semibold md:text-2xl text-lg'>{item.title}</h4>
        <p className='text-gray-700 text-sm md:text-base'>{item.description}</p>
        <button className='text-sm text-white bg-gray-700 px-4 py-2 rounded-lg mt-5 outline-none hover:bg-gray-800 active:scale-95 transition duration-200'>{item.buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;