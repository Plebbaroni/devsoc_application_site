import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
function ContentRoutes() {
  return (
      <Routes>
          <Route path='/' element={<Welcome name="Welcome"/>}/>
          <Route path='/AboutMe' element={<AboutMe name="About Me"/>}/>
          <Route path='/VideoGames' element={<AboutMe name="Video Games"/>}/>
          <Route path='/Music' element={<AboutMe name="Music"/>}/>
          <Route path='/OtherStuff' element={<AboutMe name="Other Stuff"/>}/>
      </Routes>
  )
}

export default ContentRoutes