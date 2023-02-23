function Menu(props) {
    return (<div>
        <ul>
            <li>{props.firstName}</li>
            <li>{props.firstName}</li>
            <li>{props.firstName}</li>
            <li>{props.children}</li>
        </ul>
    </div>)
}

export default Menu;