type HeaderProps = {
    title: string,
}

export function Header({title}: HeaderProps){
    return (
        <h1 className="text-center py-20 max-w-2xl font-semibold text-3xl text-secondary-darkgreen">
            {title}
        </h1>
    )
}
