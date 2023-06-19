import React from 'react';
import { Stack, Divider, Box, Typography } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { BsChevronCompactDown } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <div className="project-container">
          <img
            style={{ height: "20px" }}
            alt="logo"
            src="https://i.ibb.co/SQpvxzX/Group-7-2x.png"
          />
          <p className="project">Project M.</p>
          <img
            alt="back"
            style={{ height: "20px", marginLeft: "50px" }}
            src="https://i.ibb.co/8MysMpM/Group-639.png"
          />
        </div>

        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <div className='search-container-div' >
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for anything..."
                className="search-input"
              />
              <FaSearch className="search-icon" />
            </div>
          </div>


          <Box display="flex">
            <Box padding="20px">
              <img
                className="icon2"
                alt="logo"
                src="https://i.ibb.co/zmyftyw/Group-640.png"
                style={{ height: "24px", width: "120px", marginRight: "10px" }}
              />
            </Box>

            <div className="profile">

              <p className="anima">
                Anima Aggarwal
                <br />
                <span className='up'>U.P, India</span>
              </p>

              <Box padding="10px">
                <img
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  alt="girl"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              </Box>
              <BsChevronCompactDown size="20" style={{ marginTop: "25px" }} />
            </div>

          </Box>

        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;
