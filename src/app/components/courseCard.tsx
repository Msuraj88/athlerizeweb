import { useRouter } from 'next/navigation'
import React from 'react'

const CourseCard = ({ isLaunchSoon, bgImg, title, desc, route }: any) => {
  const router = useRouter()
  return (
    <div style={{
      background: `linear-gradient(to top, black 10%, transparent 70%), url(/assets/images/${bgImg}.png)`,
      cursor: isLaunchSoon ? "auto" : "pointer",
      backgroundSize: 'cover',
    }}
      className={`card-container ${!isLaunchSoon ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (!isLaunchSoon) {
          router.push(`${route}`);
        }
      }}>

      {/* {isLaunchSoon &&  
        <span className='launch-text'>Launching Soon</span>
      } */}
      <div className='details' style={{ opacity: isLaunchSoon ? ".3" : "1", }}>
        <h2 className='f700'>{title}</h2>
        <span>{desc}</span>
        <p className='mt-16'>2 Days | 2 Hours</p>
      </div>
    </div>
  )
}

export default CourseCard