import { useRouter } from 'next/navigation'
import React from 'react'

const CourseCard = ({isLaunchSoon ,bgImg}: any) => {
  const router = useRouter()
  return (
    <div  style={{ background:`linear-gradient(to top, black 10%, transparent 70%), url(/assets/images/${bgImg}.png)`,cursor:isLaunchSoon?"auto":"pointer"}}className='card-container cursor-pointer' onClick={() => {!isLaunchSoon && router.push('/course-details')}}>
      {/* {isLaunchSoon &&  
        <span className='launch-text'>Launching Soon</span>
      } */}
        <div className='details'style={{opacity: isLaunchSoon ?".3":"1", }}>
        <h1 className='f700'>SAI PRANEETH</h1>
        <span>From Grassroots to Glory: Building a Career in Sports</span>
        <p className='mt-16'>14 Sessions | 2 Days | 2 Hours</p>
        </div>
    </div>
  )
}

export default CourseCard