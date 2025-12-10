import React from 'react'
import Hello from '../../components/hello'
import Home from '@/components/Home'

const page = () => {
  console.log('i am a server')
  return (
    <div>
      <Hello />
      <Home />
    </div>
  )
}

export default page