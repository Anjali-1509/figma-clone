import { Stack } from '@mui/material'
import React from 'react'
import { TiPen } from "react-icons/ti"
import { IoMdLink } from "react-icons/io"
import { BsFunnel } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { CiCalendarDate } from "react-icons/ci"
import { FaEquals } from "react-icons/fa"
import {MdPeopleOutline} from "react-icons/md"

const UpperMainContent = () => {
    return (
        <div className='upper_main_content_container'>
            <div style={{ textAlign: "left" }}>
                <p className="mobile-app">MOBILE APP <span><TiPen style={{ borderRadius: '5px', background: "rgb(220, 214, 250)" }} size="20" color="#5030E5" /> <IoMdLink style={{ borderRadius: '5px', background: "rgb(220, 214, 250)" }} size="20" color="#5030E5" /></span></p>
                <button class="filter-button">
                    <BsFunnel className="icon" />
                    Filter
                    <IoIosArrowDown className="icon" />
                </button>

                <button class="filter-button">
                    <CiCalendarDate className="icon" />
                    Today
                    <IoIosArrowDown className="icon" />
                </button>


            </div>

            <div className="upper_main_content_second">
                <img
                    alt="avatar"
                    src="https://i.ibb.co/68t0rBm/Group-646-2.png"
                    style={{ marginRight: "20PX", width: "210px" }}
                />

                <Stack direction="row" alignItems="center" justifyContent="space-around" style={{ height: "100px", width: "300px" }}>

                    <button className="filter-button2">
                        <MdPeopleOutline className="icon" />
                        Share
                        <IoIosArrowDown className="icon" />
                    </button>

                    <div style={{ height: "30px", width: "0px", border: "1px solid #787486", marginLeft: "10px" }}></div>

                    <button className="square-button">
                        <FaEquals size="30" />
                    </button>

                    <img
                        style={{ height: "40px", width: "30px" }}
                        alt="dots"
                        src="https://i.ibb.co/QMx37rm/edit-logo.png" />

                </Stack>
            </div>
        </div>
    )
}

export default UpperMainContent
