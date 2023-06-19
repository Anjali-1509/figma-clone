import React from 'react'
import { Box, Typography } from '@mui/material';
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { RxDotFilled } from "react-icons/rx"
import { AiFillBulb } from "react-icons/ai"

const SideBar = () => {
  return (
    <div className='sideBar'>

      <div className='inner_sidebar'>


        <img
          style={{ height: "22px", width: "90px", marginBottom: "20px", cursor: "pointer" }}
          src="https://i.ibb.co/Hd8rdDx/Group-53.png"
          alt="logo"
        />


        <img
          style={{ height: "22px", width: "100px", marginBottom: "20px", cursor: "pointer" }}
          src="https://i.ibb.co/18cc7nC/Group-49-2.png"
          alt="logo"
        />


        <img
          style={{ height: "22px", width: "90px", marginBottom: "20px", cursor: "pointer" }}
          src="https://i.ibb.co/2hH5RMs/Group-50.png"
          alt="logo"
        />


        <img
          style={{ height: "22px", width: "100px", marginBottom: "20px", cursor: "pointer" }}
          src="https://i.ibb.co/Swhx0CX/Group-51.png"
          alt="logo"
        />


        <img
          style={{ height: "22px", width: "100px", marginBottom: "30px", cursor: "pointer" }}
          src="https://i.ibb.co/61LMP4S/Group-52.png"
          alt="logo"
        />
      </div>


      <div className="inner_sidebar_second">
        <div>
          <img
            alt="logo"
            style={{ height: "20px", width: "200px", marginTop: "30px", padding: "20px" }}
            src="https://i.ibb.co/fQrc8yd/Group-54.png" />
        </div>

        <Box padding="10px" display="flex" justifyContent="space-around" alignItems="center" height="39px" borderRadius="6px" width="225px" backgroundColor="rgb(241, 238,253)">
          <Box display="flex" alignItems="center" justifyContent="space-around">
            <RxDotFilled color="#7AC555" size="20" style={{ marginRight: "10px" }} />
            <h4>Mobile App</h4>
          </Box>
          <BiDotsHorizontalRounded />
        </Box>

        <Box padding="10px" display="flex" justifyContent="space-around" alignItems="center" height="39px" width="225px">
          <Box display="flex" alignItems="center" justifyContent="space-around" marginRight="20px">
            <RxDotFilled color="#FFA500" size="20" style={{ marginRight: "10px" }} />
            <h4 style={{ color: "#787486" }}>Website Redesign </h4>
          </Box>
        </Box>

        <Box padding="10px" textAlign="left" display="flex" justifyContent="center" alignItems="center" height="39px" width="229px">
          <Box display="flex" alignItems="center" justifyContent="space-around" marginRight="40px">
            <RxDotFilled color="#E4CCFD" size="20" style={{ marginRight: "10px" }} />
            <h4 style={{ color: "#787486" }}>Design System </h4>
          </Box>
        </Box>

        <Box padding="10px" textAlign="left" display="flex" justifyContent="space-around" alignItems="center" height="39px" width="229px">
          <Box display="flex" alignItems="center" justifyContent="space-around" marginRight="55px">
            <RxDotFilled color="#76A5EA" size="20" style={{ marginRight: "10px" }} />
            <h4 style={{ color: "#787486" }}>Wireframes </h4>
          </Box>
        </Box>

      </div>


      <div className='thought'>
        <div className="bulb">
          <AiFillBulb size="35" className="ico" />
        </div>
        <Typography marginTop="20px" variant="h6" color="#000000" fontWeight="500" marginTop="25px" >Thoughts Time</Typography>
        <p>
          We don’t have any notice for you, till then you can share your thoughts with your peers.
        </p>
        <div className="message">
          <p className='write'>Write a message</p>
        </div>
      </div>

    </div>
  )
}

export default SideBar
