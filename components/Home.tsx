import React from 'react'

// Define the Album type based on the API response structure
interface Album {
  id: number
  title: string
  // Note: The JSONPlaceholder albums endpoint doesn't include images
  // We'll need to use a placeholder image or a different API for images
}

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: Album[] = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.slice(0, 12).map((album) => (
          <div 
            key={album.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image - Using placeholder since API doesn't provide images */}
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <p className="text-sm opacity-90">Album #{album.id}</p>
              </div>
            </div>
            
            {/* Title */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                {album.title}
              </h3>
              <p className="text-gray-600 text-sm">Album ID: {album.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;