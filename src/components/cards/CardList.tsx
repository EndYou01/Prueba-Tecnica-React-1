import { Key } from "react"
import { getCardByProgramType } from "../../selectors/getCardByProgramType"
import axios from 'axios';

type programType = {
    programType: string
}


export const CardList = (programType: programType) => {
    
    const cards = getCardByProgramType(programType)
    
    let readyCards: { title: string; description: string; programType: string; images: { PosterArt: { url: string; width: number; height: number; }; }; releaseYear: number; }[] = []

    cards.map(element => {

        let config = {
            method: 'get',
            url: element.images.PosterArt.url,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                readyCards.push(element)
                localStorage.setItem('element', JSON.stringify(readyCards))
            })
            .catch((error) => {
            });
    })

    const newCards:any = localStorage.getItem('element')

    return (
        <div className="grid_container container">
            {JSON.parse(newCards).map((card: any, index: Key) => {
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


