import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className=' text-center pt-[100px]'>
        <Link className='text-orange-700 font-bold text-xl' to={'/login'}>Нажмите сюда чтобы Войти</Link>
    </div>
  )
}

export default Main