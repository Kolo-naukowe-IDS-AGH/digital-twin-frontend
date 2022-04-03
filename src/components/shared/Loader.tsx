import React from 'react'

const Loader: React.FC = () => {
  const circleCommonClasses = 'h-1.5 w-1.5 bg-primary-100 rounded-full'

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  )
}

export default Loader
