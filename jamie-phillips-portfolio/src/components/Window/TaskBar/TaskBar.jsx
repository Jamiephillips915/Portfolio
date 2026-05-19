import "./TaskBar.css"

function TaskBar() {
    return (
        <div className="taskBarDiv">
            <div className="tabsDiv">
                <div>
                    <a>
                        <div className="activeTabDiv">
                            <div></div>
                        </div>
                        <div className="tabNameDiv">
                            <p>Home</p>
                        </div>
                        <div className="tabExitDiv">
                            <p>&#x2715;</p>                            
                        </div>
                    </a>
                </div>
                <div>
                    <a>
                        <div className="activeTabDiv">
                            <div></div>                            
                        </div>
                        <div className="tabNameDiv">
                            <p>Projects</p>
                        </div>
                        <div className="tabExitDiv">
                            <p>&#x2715;</p>                        
                        </div>                     
                    </a>
                </div>
                <div>
                    <a>
                        <div className="activeTabDiv">
                            <div></div>                            
                        </div>
                        <div className="tabNameDiv">
                            <p>Experience</p>
                        </div>
                        <div className="tabExitDiv">
                            <p>&#x2715;</p>                        
                        </div>                   
                    </a>
                </div>
                <div>
                    <a>
                        <div className="activeTabDiv">
                            <div></div>                            
                        </div>
                        <div className="tabNameDiv">
                            <p>Skills</p>
                        </div>
                        <div className="tabExitDiv">
                            <p>&#x2715;</p>
                        </div>                     
                    </a>
                </div>
                <div>
                    <a>
                        <div className="activeTabDiv">
                            <div></div>                            
                        </div>
                        <div className="tabNameDiv">
                            <p>Contact Me</p>
                        </div>
                        <div className="tabExitDiv">
                            <p>&#x2715;</p>
                        </div>                    
                    </a>
                </div>
            </div>
            <div className="tabButtonsDiv">
                <a className="minimiseButton">
                    <p>&#8722;</p>
                </a>
                <a className="maximiseButton">
                    <p>&#9634;</p>
                </a>
                <a className="exitButton">
                    <p>&#x2715;</p>
                </a>
            </div>
        </div>
    );
}

export default TaskBar