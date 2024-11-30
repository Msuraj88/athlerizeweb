import { useRouter } from 'next/navigation'
import React from 'react'

const CourseCard = ({isLaunchSoon}: any) => {
  const router = useRouter()
  return (
    <div className='card-container cursor-pointer' onClick={() => router.push('/course-details')}>
      {isLaunchSoon && 
        <span className='launch-text'>Launching Soon</span>
      }
        <div className='details'>
        <h1>SAI PRANEETH</h1>
        <h5>From Grassroots to Glory: Building a Career in Sports</h5>
        <p>14 Sessions | 2 Days | 2 Hours</p>
        </div>
    </div>
  )
}

export default CourseCard