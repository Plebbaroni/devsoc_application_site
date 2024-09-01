import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import VideoGames from './VideoGames'
import Music from './Music'
import OtherStuff from './OtherStuff'
import "../styles/ContentTemplate.css"

function ContentRoutes() {
  return (
      <Routes>
          <Route path='/' element={<Welcome name="welcome"/>}/>
          <Route path='/AboutMe' element={<AboutMe name="about-me"/>}/>
          <Route path='/VideoGames' element={<VideoGames name="video-games"/>}/>
          <Route path='/Music' element={<Music name="music"/>}/>
          <Route path='/OtherStuff' element={<OtherStuff name="other-stuff"/>}/>
      </Routes>
  )
}

export default ContentRoutes