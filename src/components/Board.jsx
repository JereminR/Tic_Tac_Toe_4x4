import {Square} from './Square.jsx'

//Contains the game board where you can play
export function Board ({board, turn, turns, updateBoard}) {
    //const classTurns = `square ${isTurn ? 'isTurn':''}`

    return(
    <section className='
    p-2
    bg-colorSurfaceCard
    border border-colorSutilBoard rounded-3xl
    shadow-2xl shadow-black/30
    '>
        <div className='grid grid-cols-4 gap-1'>
            {
                board.map((indiBoard, index)=>{
                return(
                <Square key={index} index={index} updateBoard={updateBoard}>
                    {indiBoard}
                </Square>
                )
                })
            }
        </div>
    
        <div className='
        pt-3
        border-t border-colorSutilBoard
        flex mt-4 justify-center gap-1 
        '>
            <Square isTurn={turn === turns.X}> {turns.X}</Square>
            <Square isTurn={turn === turns.O}> {turns.O}</Square>
        </div>
    </section>
    )
    
}