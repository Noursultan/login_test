import React from 'react'
import { useSelector } from 'react-redux'
import { Audio } from 'react-loader-spinner'

function Profile() {
    const { data, load } = useSelector((state) => state.user)

  return (
    <div className='flex flex-col items-center mt-14'>
        {load === true ? 
            (<div><Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass /></div>) : 
        (<div>
            <h2 className='font-[600px] text-[25px] mb-5 text-cyan-700'>Вы успешно вошли в систему!</h2>
            <div className='flex gap-[30px]'>
                <div className='flex flex-col'>
                    <span className='font-[600px] text-[20px]'>{data?.firstName}</span>
                    <span className='font-[600px] text-[20px]'>{data?.lastName}</span>
                </div>
                <img 
                    className=' rounded-[100px] w-[80px] h-[80px] border border-solid border-[blue]' 
                    src={data?.image} alt="userPhoto" 
                />
            </div>
        </div>)}
    </div>
  )
}

export default Profile