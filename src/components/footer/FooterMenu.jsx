function FooterMenu() {
    const menu = [
        {
            name: 'Subtitle',
            id: 1
        },
        {
            name: 'Subtitle',
            id: 2
        },
        {
            name: 'Subtitle',
            id: 3
        },
        {
            name: 'Subtitle',
            id: 4
        }
    ]
    return (
        <>
            <ul className="flex flex-col gap-4">
                <li className="text-2xl font-medium"><a href="/">Title</a></li>
                {menu.map(item => (
                    <li key={item.id} className="hidden lg:block"><a href="/">{item.name}</a></li>
                ))}
            </ul>
            <ul className="flex flex-col gap-4">
                <li className="text-2xl font-medium"><a href="/">Title</a></li>
                {menu.map(item => (
                    <li key={item.id} className="hidden lg:block"><a href="/">{item.name}</a></li>
                ))}
            </ul>
            <ul className="flex flex-col gap-4">
                <li className="text-2xl font-medium"><a href="/">Title</a></li>
                {menu.map(item => (
                    <li key={item.id} className="hidden lg:block"><a href="/">{item.name}</a></li>
                ))}
            </ul>
        </>
    )
}
export default FooterMenu;