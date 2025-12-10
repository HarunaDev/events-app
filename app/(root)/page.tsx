import React from 'react'
import Hello from '../../components/hello'

const page = () => {
  console.log('i am a server')
  return (
    <div>
      <Hello />
    </div>
  )
}

export default page