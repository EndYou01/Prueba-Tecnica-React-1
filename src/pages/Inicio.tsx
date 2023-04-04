import { useNavigate } from "react-router"


export const Inicio = () => {

    const navigate = useNavigate()

    return (
        <div className="container inicio">

            <div 
                className="inicio_card"
                onClick={()=> navigate('series')}
            >
                <div className="inicio_card_img">
                    <h2 className="color_white">Series</h2>
                </div>

                <p>Popular Series</p>
            </div>

            <div 
                className="inicio_card"
                onClick={()=> navigate('peliculas')}
            >
                <div className="inicio_card_img">
                    <h2 className="color_white">Movies</h2>
                </div>

                <p>Popular Movies</p>
            </div>
            

        </div>
    )
}
