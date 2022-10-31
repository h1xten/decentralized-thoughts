import React from 'react'
import {Outlet} from 'react-router-dom'
import Topbar from '../components/topbar/Topbar'
import {Favorite} from '@mui/icons-material'

const AppLayout = () => {
  return (
    <>
        <header>
            <Topbar />
        </header>
        <main>
            <div className="page container">
                <Outlet />
            </div>
        </main>
        <footer>
          Made With <Favorite sx={{fill: 'red'}} /> by h1xten
        </footer>
    </>
  )
}

export default AppLayout