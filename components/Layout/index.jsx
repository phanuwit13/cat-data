import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Service } from '/service/index'
import Swal from 'sweetalert2'

function Layout(props) {
  const router = useRouter()
  const [state, setstate] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if ((username, password)) {
      let response = await Service.Login(username, password)
      if (response.success) {
        document.getElementById('close_login').click()
        router.push({
          pathname: '/admin',
          query: {
            firstname: response.data.firstname,
            lastname: response.data.lastname,
          },
        })
      }else{
        Swal.fire(
          'ผิดพลาด',
          response.message,
          'error'
        )
      }
    }
  }

  return (
    <div>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100px', fontSize: '32px' }}
      >
        สมาพันธ์ 4ขา แห่งประเทศไทย
      </div>
      <ul className='nav nav-tabs ps-2'>
        <li className='nav-item'>
          <Link href='/'>
            <a
              className={`nav-link ${router.pathname == '/' ? 'active' : ''}`}
              aria-current='page'
              href='#'
            >
              Cat
            </a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/dog'>
            <a
              className={`nav-link ${
                router.pathname == '/dog' ? 'active' : ''
              }`}
              aria-current='page'
              href='#'
            >
              Dog
            </a>
          </Link>
        </li>

        <a
          className={`nav-link }`}
          style={{ position: 'absolute', right: '0' }}
          aria-current='page'
          href='#'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          Login
        </a>
      </ul>
      {props.children}
      <div className='modal' id='exampleModal' tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Login</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='mb-3'>
                <label className='form-label'>Username</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button
                id='close_login'
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleLogin()
                }}
                type='button'
                className='btn btn-primary'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
