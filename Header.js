const Header = (props) => {
    const activeItems = props.items.filter(item => item.active )
    const number = activeItems.length

    return(
        <header>
            <h2>Order size: {number}</h2>
            <h2>To pay: {number ? `${number * 10} $ ` : "no items"}  </h2>
        </header>
    )
}