import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

function SignUp() {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const { loading, signup } = useSignUp()

  function handleCheckBoxChange(gender) {
    setInputs({ ...inputs, gender })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Enter Full Name'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to={"/login"} className='inline-block mt-2 hover:text-blue-600 hover:underline text-sm'>
            Already have an account?
          </Link>

          <div>
            <button
              className='btn btn-block btn-sm mt-2'
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignUp
