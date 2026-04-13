import InfoBox from "../../components/InfoBox/InfoBox"
import "./HomePage.css"

function HomePage() {
    return (
        <div className="wrapper">
            <InfoBox className="InfoBox">
                <p className="title">
                    Hello, i'm Jamie.
                </p>
                <p className="subTitle">
                    I’m a 2nd year Computer Science student <br /> at the University of Edinburgh,  with <br />a specialization in Data Science.
                </p>
            </InfoBox>
        </div>

    )
}

export default HomePage