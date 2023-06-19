import React, { useState } from "react";
import { Typography } from "@mui/material";
import { RxDotFilled } from "react-icons/rx"
import { BsPlus } from "react-icons/bs"
import { BiDotsHorizontalRounded } from "react-icons/bi"


const KanbanBoard = () => {
    const [columns, setColumns] = useState({
        todo: [
            {
                rank: "Low",
                name: "Brainstorming",
                desc: "Brainstorming brings team members' diverse experience into play. ",
                img: "https://i.ibb.co/VNDHTFL/Group-634.png"
            },
            {
                rank: "High",
                name: "Research",
                desc: "User research helps you to create an optimal product for users.",
                img: "https://i.ibb.co/ZmJJfyg/Group-635.png"

            },
            {
                rank: "High",
                name: "Wireframes",
                desc: "Low fidelity wireframes include the most basic content and visuals.",
                img: "https://i.ibb.co/VNDHTFL/Group-634.png"
            },
            
        ],
        inProgress: [
            {
                rank: "Low",
                name: "Onboarding Illustrations ",
                heroImg: "https://i.ibb.co/Gv8DB6c/unsplash-Micqq-Gy-DQ6w.png ",
                img: "https://i.ibb.co/CJv0d0G/Group-635-1.png"
            },
            {
                rank: "Low",
                name: "Moodboard",
                heroImg: "https://i.ibb.co/MGKPsR8/Group-632.png",
                img: "https://i.ibb.co/Jnx1xBR/Group-635-2.png"
            },
        ],
        done: [
            {
                rank: "Completed",
                name: "Mobile App Design",
                heroImg: "https://i.ibb.co/1rFfpF8/Plant-Care-App-Dribbble-shot-1.png",
                img: "https://i.ibb.co/ZYk0QGt/Group-635-4.png"
            },
            {
                rank: "Completed",
                name: "Design System",
                desc: "It just needs to adapt the UI from what you did before",
                img: "https://i.ibb.co/VNDHTFL/Group-634.png"
            },
        ]
    });

    const handleDragStart = (event, cardContent) => {
        event.dataTransfer.setData("text/plain", JSON.stringify(cardContent));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, columnName) => {
        const cardContent = JSON.parse(event.dataTransfer.getData("text/plain"));
        const newColumns = { ...columns };
        const sourceColumn = Object.keys(columns).find((key) =>
            columns[key].some((card) => card.name === cardContent.name)
        );

        if (!sourceColumn) {
            return;
        }

        const sourceIndex = newColumns[sourceColumn].findIndex(
            (card) => card.name === cardContent.name
        );
        const destinationIndex = newColumns[columnName].length;

        const draggedCard = newColumns[sourceColumn].find(
            (card) => card.name === cardContent.name
        );

        newColumns[sourceColumn].splice(sourceIndex, 1);
        newColumns[columnName].splice(destinationIndex, 0, draggedCard);

        setColumns(newColumns);
    };

    return (
        <div className="kanban-board">
            <div
                className="column"
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event, "todo")}
            >
                <div className="kanban-heading blue">
                    <Typography variant="h6"> <RxDotFilled color="#5030E5" /> To Do  <span className="circle">4</span></Typography>
                    <div><BsPlus style={{ borderRadius: '5px', background: "rgb(220, 214, 250)" }} size="20" color="#5030E5" /> </div>
                </div>

                {columns.todo.map((cardContent) => (
                    <div
                        key={cardContent.name}
                        className={cardContent.desc ? "card" : "imgCard"}
                        draggable
                        onDragStart={(event) => handleDragStart(event, cardContent)}
                    >
                        {
                            cardContent.desc ? <>
                                <div style={{ display: "flex", width: "85%", justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                                    <p className={cardContent.rank==="Completed" && "completed" || cardContent.rank==="Low" && "low" || cardContent.rank==="High" && "high"}>{cardContent.rank}</p>
                                    <BiDotsHorizontalRounded size="20" />
                                </div>

                                <div style={{ textAlign: "left", width: "90%", height: "auto" }}>
                                    <p className="name">{cardContent.name}</p>
                                    <p className="desc">{cardContent.desc}</p>
                                    <div style={{ marginTop: "50px" }}>
                                        <img className="comment" src={cardContent.img} alt={cardContent.name} />
                                    </div>
                                </div>
                            </>
                                :
                                <>
                                    <div style={{ display: "flex", width: "85%",justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                                        <p className={cardContent.rank==="Completed" && "completed" || cardContent.rank==="Low" && "low"}>{cardContent.rank}</p>
                                        <BiDotsHorizontalRounded size="20" style={{marginTop:"30px"}} />
                                    </div>

                                    <div style={{ textAlign: "left", width: "90%", height: "auto" }}>
                                        <p className="name2">{cardContent.name}</p>
                                        <img className="heroImg" src={cardContent.heroImg} alt={cardContent.name} />
                                        <div style={{ marginTop: "50px" }}>
                                            <img className="comment" src={cardContent.img} alt={cardContent.name} />
                                        </div>
                                    </div>
                                </>
                        }

                    </div>
                ))}
            </div>
            <div
                className="column"
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event, "inProgress")}
            >
                <div className="kanban-heading yellow">
                    <Typography variant="h6"> <RxDotFilled color="#FFA500" /> On Progress<span className="circle">3</span></Typography>
                </div>

                {columns.inProgress.map((cardContent) => (
                    <div
                        key={cardContent.name}
                        className={cardContent.desc ? "card" : "imgCard"}
                        draggable
                        onDragStart={(event) => handleDragStart(event, cardContent)}
                    >
                        {
                            cardContent.desc ? <>
                                <div style={{ display: "flex", width: "85%", justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                                    <p className={cardContent.rank==="Completed" ? "completed" :"low"}>{cardContent.rank}</p>
                                    <BiDotsHorizontalRounded size="20" />
                                </div>

                                <div style={{ textAlign: "left", width: "90%", height: "auto" }}>
                                    <p className="name">{cardContent.name}</p>
                                    <p className="desc">{cardContent.desc}</p>
                                    <div style={{ marginTop: "50px" }}>
                                        <img className="comment" src={cardContent.img} alt={cardContent.name} />
                                    </div>
                                </div>
                            </>
                                :
                                <>
                                    <div style={{ display: "flex", width: "85%", justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                                        <p className={cardContent.rank==="Completed" ? "completed" :"low"}>{cardContent.rank}</p>
                                        <BiDotsHorizontalRounded size="20" />
                                    </div>

                                    <div style={{ textAlign: "left", width: "90%", height: "auto" }}>
                                        <p className="name2">{cardContent.name}</p>
                                        <img className="heroImg" src={cardContent.heroImg} alt={cardContent.name} />
                                        <div  style={{ marginTop: "50px" }}>
                                            <img className="comment" src={cardContent.img} alt={cardContent.name} />
                                        </div>
                                    </div>
                                </>
                        }

                    </div>
                ))}
            </div>
            <div
                className="column"
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event, "done")}
            >
                <div className="kanban-heading green">
                    <Typography variant="h6"> <RxDotFilled color="#76A5EA" /> Done <span className="circle">2</span></Typography>
                </div>

                {columns.done.map((cardContent) => (
                    <div
                        key={cardContent.name}
                        className={cardContent.desc ? "card" : "imgCard"}
                        draggable
                        onDragStart={(event) => handleDragStart(event, cardContent)}
                    >
                        {
                            cardContent.desc ? <>
                                <div style={{ display: "flex", width: "85%", justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                                    <p className={cardContent.rank==="Completed" ? "completed" :"low"}>{cardContent.rank}</p>
                                    <BiDotsHorizontalRounded size="20" />
                                </div>

                                <div style={{ textAlign: "left", width: "90%", height: "auto" }}>
                                    <p className="name">{cardContent.name}</p>
                                    <p className="desc">{cardContent.desc}</p>
                                    <div style={{ marginTop: "50px" }}>
                                        <img className="comment" src={cardContent.img} alt={cardContent.name} />
                                    </div>
                                </div>
                            </>
                                :
                                <>
                                    <div style={{ display: "flex", width: "85%", justifyContent: "space-between", alignItems: "center", height: "30px" }}>
                                        <p className={cardContent.rank==="Completed" ? "completed" :"low"}>{cardContent.rank}</p>
                                        <BiDotsHorizontalRounded size="20" />
                                    </div>

                                    <div style={{ textAlign: "left", width: "90%", height: "auto" }}>
                                        <p className="name2">{cardContent.name}</p>
                                        <img className="heroImg" src={cardContent.heroImg} alt={cardContent.name} />
                                        <div style={{ marginTop: "50px" }}>
                                            <img className="comment" src={cardContent.img} alt={cardContent.name} />
                                        </div>
                                    </div>
                                </>
                        }

                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
