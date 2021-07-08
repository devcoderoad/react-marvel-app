import React, { useEffect, useState } from 'react'

function Navbar({ props }) {
  const [scroll, setScroll] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScroll(false)
      } else {
        // upscroll code
        setScroll(true)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }
    window.addEventListener('scroll', onScroll)
    return window.addEventListener('scroll', onScroll)
  }, [scroll, scrollTop])

  const position =
    scrollTop > 166 ? 'fixed-top navbar navbar-dark bg-dark' : 'pt-3'

  return (
    <div className={`mb-4 mb-lg-6 ${position} mx-auto`}>
      <a href="/" title="Home">
        <img height="50px" src="/img/marvel.svg" alt="Logo" />
      </a>
      <ul className="nav justify-content-center text-uppercase roboto">
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            Comics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/characters">
            Characters
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/creators">
            Creators
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/events">
            Event
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/series">
            Series
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/stories">
            Stories
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
