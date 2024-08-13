import React from 'react'
import { Link } from 'react-router-dom'

const Destination = ({destination , currentIndex , loading , setCurrentIndex}) => {
  return (
    <>
      <section className="text-white lg:h-[792px] mx-auto w-full">
        <div>
          <h1 className='text-2xl ms-20'><span className='text-slate-600'>01</span> Pick Your Destination</h1>
        </div>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center lg:h-[500px] lg:justify-around p-5 px-10 md:px-40 lg:mt-5 md:mt-10">
            <div className="mx-auto lg:w-full lg:p-0 px-28">
              <img
              className='lg:w-full'
                src={destination[currentIndex].images.png}
                alt={destination[currentIndex].name}
              />
            </div>
            <div className='lg:ps-0 lg:ms-10 py-10 lg:pe-20 lg:text-left text-center '>
              <nav className="destination-nav mb-5">
                {destination.map(({ name }, nameIndex) => (
                  <Link key={nameIndex} className={"lg:mx-5 mx-2 hover:border-b-2 hover:border-b-white  hover:animate-pulse cursor-pointer lg:text-sm text-base text-slate-200 w-full"} onClick={() => setCurrentIndex(nameIndex)}>
                    {name}
                  </Link>
                ))}
              </nav>
              <article className="lg:ms-5 mx-auto">
                <div>
                  <h1 className='text-6xl font-serif tracking-wide mb-8'>{destination[currentIndex].name}</h1>
                  <p className='text-sm tracking-wider mb-7 text-slate-300'>{destination[currentIndex].description}</p>
                  <hr className='dest-rule mx-2'/>
                  <div className='flex lg:flex-row lg:gap-32 lg:p-0 my-7 justify-between px-10'>
                      <article>
                        <h3 className='text-slate-300'>AVG.DISTANCE</h3>
                        <p>{destination[currentIndex].distance}</p>
                      </article>
                      <article>
                      <h3 className='text-slate-300'>EST. TRAVEL TIME</h3>
                      <p>{destination[currentIndex].travel}</p>
                      </article>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Destination