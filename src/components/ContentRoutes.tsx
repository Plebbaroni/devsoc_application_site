import {Routes, Route} from 'react-router-dom'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
function ContentRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Welcome name="Welcome"/>}/>
        <Route path='/AboutMe' element={<AboutMe name="About Me"/>}/>
    </Routes>
  )
}

export default ContentRoutes