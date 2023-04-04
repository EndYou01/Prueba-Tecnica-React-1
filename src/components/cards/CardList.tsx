import { getCardByProgramType } from "../../selectors/getCardByProgramType"

type programType ={
    programType: string
}


export const CardList = (programType: programType) => {

    const cards = getCardByProgramType(programType)

    console.log(cards)

    return(
        <div className="grid_container container">
            {cards.map( (card: any, index) => {
                return (
                    <div 
                        className="grid_item ps_card" 
                        key={index} 
                        // onClick={()=> handleSelectProduct(producto.id)}
                    >
                       <img src={card.images.PosterArt.url} alt="" />
                       <p>{card.title}</p>
                    </div>
                )
            })}
        </div>
    )
}


