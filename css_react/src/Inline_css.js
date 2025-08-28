const superman ={
    backgroundColor : "brown"
}

const spiderman = {
    backgroundColor : "yellow"
}

export function Main (){

    return <>
    <h1 style={superman}>Hello Inline statement 1 😎</h1>
    <h1 style ={spiderman}>Hello Inline statement 2 😃</h1>
    </>
}