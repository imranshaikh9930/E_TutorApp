import React from 'react'
import CountUp from 'react-countup';
const NumberCounterSection = () => {
  return (
    <div className="bg-secondary w-full py-10 text-white">
      <div className="container grid grid-cols-2 items-center md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">
            <CountUp
              start={0}
              end={872}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
             
            />
            
          </p>
          <p>Expert tutors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">
            <CountUp
              end={20000}
              separator=','
              suffix='+'
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
             
            />
            
          </p>
          <p>Hours content</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">
            <CountUp
              end={298}

              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
             
            />
            
          </p>
          <p>Subject and courses</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">
            <CountUp
              end={72878}
              separator=','
              suffix='+'
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
             
            />
            
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  )
}

export default NumberCounterSection