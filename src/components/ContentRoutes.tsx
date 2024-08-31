import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import VideoGames from './VideoGames'
import Music from './Music'
import OtherStuff from './OtherStuff'

function ContentRoutes() {
  return (
      <Routes>
          <Route path='/' element={<Welcome name="Welcome"/>}/>
          <Route path='/AboutMe' element={<AboutMe name="About Me"/>}/>
          <Route path='/VideoGames' element={<VideoGames name="Video Games"/>}/>
          <Route path='/Music' element={<Music name="Music"/>}/>
          <Route path='/OtherStuff' element={<OtherStuff name="Other Stuff"/>}/>
      </Routes>
  )
}

export default ContentRoutes