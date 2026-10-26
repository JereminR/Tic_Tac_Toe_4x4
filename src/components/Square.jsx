import clsx from 'clsx'

//It's each individual square that has the game board (in total 16)
export function Square ({index, children, updateBoard, isTurn}) {

    const handleClick = ()=> {
        updateBoard(index);
    }

    const token = typeof children === 'string' ? children.trim() : children;
    const classTurns = clsx(
        'text-xl lg:text-xl',
        'font-semibold',
        'bg-colorSurfaceCard',
        updateBoard && 'hover:bg-colorSutilBoard',
        'p-3 m-2',
        'border border-colorAcentPrimary rounded-xl',
        'size-10 lg:size-12.5',
        'flex items-center justify-center',
        'transition-colors',
        token === 'X' && 'text-colorTextPrimary',
        token === 'O' && 'text-colorAcentSecondary',
        isTurn && 'border-colorBrightnessPurple bg-colorElevatedCard shadow-[0_0_16px_var(--color-colorAcentPrimary)]')

    return(
        <div className={classTurns} onClick={handleClick}>
            {children}
        </div>
    )
}