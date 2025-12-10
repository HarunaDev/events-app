import React from 'react'

const UserDetails = async ({params} : { params: Promise<{ id: string }>}) => {
    const {id} = await params;
  return (
    <div>Showing user details for #{id}</div>
  )
}

export default UserDetails