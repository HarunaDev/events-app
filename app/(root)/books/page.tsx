import React from 'react'

const page = async () => {
    const response = await fetch("http://localhost:3000/api/books");
    const books = await response.json()
  return (
    <main>
        <code>{JSON.stringify(books, null, 2)}</code>
    </main>
  )
}

export default page