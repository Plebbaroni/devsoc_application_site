import '../styles/ServerBar.css'

function ServerBar() {
  return (
    <div className="ServerBarWrapper">
            <div className='ServerCircle'>
                <img src='/assets/discordlogo.png' className='discordicon'></img>
                <div className='PopOutTitleWrapper'>
                    <h4 className='PopOutTitle'>This doesn't work</h4>
                </div>
            </div>
            <div className='ServerDivider'>
            </div>
            <div className='ServerCircle'>
            <img src='/assets/profilepic.png' className='profilepic'></img>
                <div className='PopOutTitleWrapper'>
                    <h4 className='PopOutTitle'>Jared's Server</h4>
                </div>
            </div>
            <div className='ServerCircle util'>
                <svg className="circleIcon_db6521" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z" className=""></path></svg>
                <div className='PopOutTitleWrapper'>
                    <h4 className='PopOutTitle'>This doesn't work</h4>
                </div>
            </div>
            <div className='ServerCircle util'>
                <svg className="circleIcon_db6521" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" className=""></path><path fill="currentColor" fill-rule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z" clip-rule="evenodd" className=""></path></svg>
                <div className='PopOutTitleWrapper'>
                    <h4 className='PopOutTitle'>This too</h4>
                </div>
            </div>
    </div>
  )
}

export default ServerBar