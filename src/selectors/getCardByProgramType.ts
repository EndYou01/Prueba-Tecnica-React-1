import { total, entries } from "../../data/sample.json";

export const getCardByProgramType = ({programType}: any) => {

    const validCategory = ['series', 'movie'];

    console.log(programType)

    if(!validCategory.includes( programType )){
        throw new Error(`ProgramType "${programType}" no es correcto`)
    }


    return (
        entries.filter( card => card.programType === programType)
    )

}