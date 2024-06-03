type HeaderProps = {
    title: string,
}

export function Header({title}: HeaderProps){
    return (
        <h1 className="text-center pt-10 font-semibold text-3xl text-secondary-darkgreen">
            {title}
        </h1>
    )
}
