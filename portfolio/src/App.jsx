// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar/Sidebar'
import MainContent from './main-content/MainContent'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((open) => !open)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <MainContent
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />
    </>
  )
}

export default App
