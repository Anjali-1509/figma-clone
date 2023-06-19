import React from 'react'
import SideBar from './SideBar'
import UpperMainContent from './UpperMainContent'
import KanbanBoard from './KanbanBoard'

const MainContent = () => {
  return (
    <div style={{display:"flex"}}>
        <SideBar />
       <div style={{ height:"100vh", width:"100%"}}>
         <UpperMainContent />
          <KanbanBoard />
       </div>
    </div>
  )
}

export default MainContent
