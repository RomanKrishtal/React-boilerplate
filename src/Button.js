function Btn() {
    let dark = true;
    const textToggle = () => {
        dark = !dark;
        console.log(dark);
    }
    return (
        <button onClick={textToggle} style={{color: dark ? 'black' : 'white'}}>Colour Change</button>
    )
}

export default Btn;