import { useEffect, useState } from 'react'
import { navigate, routes, Link } from '@redwoodjs/router'
import sanityClient from '../../client'

const HomePage = () => {
  const [, setZip] = useState()
  const [, setName] = useState()
  const [allPostsData, setAllPosts] = useState(null)

  //setting value for zip code and navigating to MusicForecast page
  const onSubmit = (data) => {
    setZip(data.zip)
    setName(data.name)
    navigate(routes.musicForecast({ zip: data.zip, name: data.name }))
  }
  useEffect(() => {
    sanityClient
      .fetch('*[_type == "product"]')
      .then((t) => setAllPosts(t))
      .catch(console.error)
  }, [])
  return (
    <div>
      {allPostsData ? (
        <section className="flex flex-col h-screen bg-black fade-in">
          <div>
            {allPostsData &&
              allPostsData.map((x) => <div key={x.title}>{x.title}</div>)}
          </div>
        </section>
      ) : (
        ''
      )}
    </div>
  )
}

export default HomePage
