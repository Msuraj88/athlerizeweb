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
        <h1 className='f700'>SAI PRANEETH</h1>
        <span>From Grassroots to Glory: Building a Career in Sports</span>
        <p className='mt-16'>14 Sessions | 2 Days | 2 Hours</p>
        </div>
    </div>
  )
}

export default CourseCard