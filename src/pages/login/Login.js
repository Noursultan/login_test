import React, { useEffect } from 'react'
import { ReactComponent as Google } from './../../assets/google_icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser, setLogin, setPassword } from '../../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { login, password, dataCame } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleData() {
        dispatch(LoginUser({login, password}))
    }

    useEffect(() => {
        if (dataCame === true) {
            navigate('/profile')
        }
    }, [dataCame])

  return (
    <div className='flex flex-col items-center mt-8 px-[8px]'>
        <h3 className='font-[600px] text-[32px]'>Вход в аккаунт</h3>
        <div className='flex flex-col gap-[5px] mt-[30px]'>
            <span>Логин</span>
            <input 
                value={login} 
                onChange={(e) => dispatch(setLogin(e.target.value))} 
                className='pl-[17px] rounded-[10px] border border-solid border-[#818181] w-[450px] h-[52px] outline-none' 
                type="text" placeholder='Логин' 
            />
        </div>
        <div className='flex flex-col gap-[5px] mt-[21px]'>
            <span>Пароль</span>
            <input 
                value={password} 
                onChange={(e) => dispatch(setPassword(e.target.value))} 
                className='pl-[17px] rounded-[10px] border border-solid border-[#818181] w-[450px] h-[52px] outline-none' 
                type="text" placeholder='Пароль' 
            />
        </div>
        <div className='font-[500px] mt-[24px]'>Или</div>
        <button 
            className='mt-[24px] font-[500px] flex gap-[19px] justify-center items-center rounded-[10px] border border-solid 
                border-black w-[450px] h-[52px]'>
            <Google />
            Войти через Google
        </button>
        <button 
            onClick={handleData} 
            className='mt-[68px] w-[450px] h-[52px] justify-center items-center bg-black text-white rounded-[10px]'
        >
            Вход
        </button>
    </div>
  )
}

export default Login