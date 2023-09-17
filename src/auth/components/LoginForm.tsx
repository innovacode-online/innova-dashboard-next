'use client'
import { IoLogoGithub } from "react-icons/io";
import { signIn } from 'next-auth/react';
import { FormEvent } from "react";

export const LoginForm = () => {


    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();
    };


    return (
        <>
            <form onSubmit={handleSubmit} className='login__form'>
                <div className='mb-3 flex flex-col min-w-md'>
                    <label className='text-slate-500' htmlFor="email">Correo Electronico:</label>
                    <input 
                        id='email'
                        className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500'
                        type="email"
                    />
                </div>
                <div className='mb-3 flex flex-col min-w-md'>
                    <label className='text-slate-500' htmlFor="password">Contraseña:</label>
                    <input 
                        id='password'
                        className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500'
                        type="password"
                    />
                </div>
                <button className='btn-primary w-full' type='submit'>Iniciar Session</button>

                <div className='flex items-center gap-4 mt-4'>
                    <div className='border-t border-slate-300 w-full'></div>
                    <p className='text-slate-300'>o</p>
                    <div className='border-t border-slate-300 w-full'></div>
                </div>
            </form>


            <button 
                onClick={() => signIn('github')} 
                className=' max-w-md mx-auto btn-primary w-full flex items-center justify-center gap-2'
            >
                GitHub
                <IoLogoGithub size={20}/> 
            </button>
        </>
    )
}
