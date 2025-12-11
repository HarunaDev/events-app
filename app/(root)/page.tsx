import EventCard from '@/components/EventCard'
import ExploreButton from '@/components/ExploreButton'
import React from 'react'
// import Hello from '../../components/hello'
// import Home from '@/components/Home'
import events from '@/lib/constants'

const Page = () => {
  console.log('i am a server')
  // const events = [
  //   {image: '/images/event1.png', title: 'Event 1'},
  //   {image: '/images/event2.png', title: 'Event 2'},
  // ]
  return (
    <section className="mt-20 p-8">
      <h1 className='text-center'>The Hub for every party lover <br /> Find events You Don't want to Miss</h1>

      <p className='text-center mt-5'>Rave, Events, and Socials. All in one place</p>

      <ExploreButton />

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>

        <ul className='events'>
          {events.map((event) => (
            <li className="list-none" key={event.title}>
                <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page