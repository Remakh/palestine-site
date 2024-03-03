import React, { useEffect, useState } from 'react'
import { FOPLogo } from '../assets'
import { Form, useNavigate } from 'react-router-dom'
import { loginCall } from '../apiUtils'
import { useAuth } from '../hooks/useAuth'

export const action = () => {
    return undefined
}


const Login = () => {
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate()
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [])

    const [isChecked, setIsChecked] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault()
        
        const token = await login({
            username: username,
            password: password
        })

        navigate('/')
    }

    return (
        <div className='min-h-[100vh] flex flex-col items-center '>
            <div className=' flex flex-col w-3/12 pt-10 '>
                <Form method="post" action='/Login' id='login-form' className='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full mt-5  border-2 items-center'>
                    <h2 className='text-font font-semibold text-green-800'>Admin Log in</h2>
                    <img src={FOPLogo} className='w-1/2 mx-auto pt-5' />
                    <div class="mb-4 py-5">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" onChange={(e) => setUsername(e.target.value)} id="username" type='text'  placeholder="Username" name='username' />
                    </div>
                        <label className='font-bold text-gray-700 text-sm' for="password">
                        Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" onChange={(e) => setPassword(e.target.value)} id="username" type={`${isChecked ? 'text' : 'password'}`} placeholder="Password" name='password'/>
                        <label className='pr-3 mt-5' for='box'>
                            Show Password?
                        </label>
                        <input type='checkbox' name='box' value='box' onChange={(e) => {setIsChecked(!isChecked)}} />
                        <button onClick={handleLogin} class="mt-10 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-xl w-full" type='submit'>
                            Sign In
                        </button>
                </Form>
            </div>
        </div>
  )
}

export default Login
