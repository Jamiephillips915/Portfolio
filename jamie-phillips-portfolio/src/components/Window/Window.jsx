import "./Window.css"
import TaskBar from "./TaskBar/TaskBar.jsx"
import Display from "./Display/Display.jsx";

function Window(){
    return(
        <div className="windowDiv">
            <TaskBar />
            <div className="displayDiv">
                
            </div>
        </div>
    );
}

export default Window