
//Button that restart the game
export function RestartGameButton({resetGame}) {
    return(
        <div className='
        text-colorTextPrimary text-sm font-medium lg:text-lg
        bg-colorSurfaceCard hover:bg-colorElevatedCard
        px-6 py-3
        mt-7 mb-5
        border border-colorAcentPrimary rounded-xl 
        cursor-pointer
        transition-all  hover:shadow-[0_0_18px_var(--color-colorAcentPrimary)]'
        onClick={resetGame}>
            Restart game
        </div>
    )
}