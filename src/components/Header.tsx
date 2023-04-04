import { useNavigate } from "react-router"


export const Header = () => {

    const navigate = useNavigate()

    return (
        <header className="header">

            <div className="row row_blue">
                <div className="container row_container">
                    <div 
                        className="demo_streaming"
                        onClick={()=> navigate('')}
                    >
                        <h1 className="color_white"><span>Demo</span> Streaming</h1>
                    </div>

                    <div className="header_buttons_container">
                        <button className="login_button">Log in</button>
                        <button className="freeTrial_button">Start your free trial</button>
                    </div>
                </div>
            </div>

            <div className="row row_gray">
                <div className="container ">
                    <h2 className="color_white">Popular Titles</h2>
                </div>
            </div>

        </header>
    )
}
