import React from 'react'
import GenderCheckBox from './GenderCheckBox'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>
          </div>

          <GenderCheckBox />

          <a href='#' className='inline-block mt-2 hover:text-blue-600 hover:underline text-sm'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp