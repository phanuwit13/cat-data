import React from 'react'
import { useRouter } from 'next/router'

function Admin() {
  const router = useRouter()
  const { firstname, lastname } = router.query

  return (
    <div style={{ padding: '20px' }}>
      <div>firstname: {firstname}</div>
      <div>lastname: {lastname}</div>
    </div>
  )
}

export default Admin
