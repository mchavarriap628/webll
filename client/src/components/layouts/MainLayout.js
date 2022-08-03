import React from 'react'
import Navigation from './Navigation'

export default function MainLayout({ children }) {
  return (
    <>
    <Navigation />
    {children}
    </>
  )
}
