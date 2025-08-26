import React from 'react'
import { Outlet } from 'react-router'
import HeaderComponent from './components/HeaderComponent'
import TrackPlayerCard from './components/TrackPlayerCard'

const Layout = () => {
  return (
    <>
        <HeaderComponent />
        <Outlet />
        <TrackPlayerCard title={'Ranga'} name={'Rockheads'} img={'https://github.com/shadcn.png'}/>
    </>
  )
}

export default Layout