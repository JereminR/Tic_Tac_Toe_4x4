import {RestartGameButton} from './RestartGameButton.jsx'
import {useState, useEffect} from 'react'
import {Square} from './Square.jsx'

//Shows a mini board where it's the winner game
export function WinnerScreen({winner, resetGame}) {
    const [showModal,setShowModal] = useState(true)

    //When "winner" changes (restarting the game), the WinnerModal will be able to be shown
    useEffect(()=>{
        setShowModal(true)
    }, [winner])

    //If "showModal" is false (caused by the "setShowModal" in the winnerCloserButton), the WinnerModal will be closed (won't be able to be shown)
    if (!showModal) return null;

    //When "winner" is null, there isn't nor winner nor draw (the game must continue and the "WinnerScreen" must not appear)
    //When "winner" is false, it's draw (the "WinnerScreen" must appear showing it's draw)
    //When "winner" is different of "null" or "false", there's a winner: "X" or "O" (the "WinnerScreen" must appear showing there's a winner and who)
    
    const isDraw = winner === false;

    if (winner !== null) {
        return(
            <section className='
            h-full w-full
            fixed top-0 left-0 z-100 
            flex items-center justify-center
          bg-[color-mix(in_srgb,var(--color-colorBackgroundPrimary)_82%,transparent)] backdrop-blur-sm'>
                <div className='
                text-colorTextPrimary
                 h-fit w-fit
                p-8 m-6 sm:p-12
                bg-colorElevatedCard
                border border-colorAcentPrimary rounded-2xl
                relative justify-items-center shadow-[0_0_28px_var(--color-colorAcentPrimary)] '>
                    <span className='text-xl font-semibold'>
                        {isDraw ? 'Draw:' : 'Winner:'}
                    </span>
                    
                    {!isDraw && <Square> {winner} </Square>}
                    
                    <RestartGameButton resetGame={resetGame}></RestartGameButton>
                    
                    <button className='
                    h-7 w-7
                    text-colorTextPrimary text-xs
                    bg-colorSurfaceCard hover:bg-colorAcentPrimary
                    border border-colorAcentPrimary rounded-full
                    absolute -top-2.5 -right-2.5  cursor-pointer    
                    transition-colors
                    '
                    onClick={()=>setShowModal(false)} title='Close'> X </button>
                </div>
            </section>
        )
    }
}