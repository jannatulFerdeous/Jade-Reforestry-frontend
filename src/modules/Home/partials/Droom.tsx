import React from 'react';
import { home_data } from '../config/constants';


const Droom = () => {
  const { droom_data } = home_data;

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center mx-20 gap-32 bg-cover bg-center bg-no-repeat px-4  py-10"
         style={{ backgroundImage: `url(${droom_data.img1.src})` }}>
      {/* Text Section */}
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-4xl font-bold text-primary font-primary  mb-4">{droom_data.title}</h2>
        <p className="text-primary font-primary  mb-6">{droom_data.description}</p>
        <ul className="space-y-2">
          {Object.values(droom_data.list).map((item, index) => (
            <li key={index} className="flex  items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className='text-primary font-primary'>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-1/2 flex justify-center">
        <img
          src={droom_data.img2.src}
          alt="Droom"
          className="rounded-lg shadow-lg  "
        />
      </div>
    </div>
  );
};

export default Droom;
