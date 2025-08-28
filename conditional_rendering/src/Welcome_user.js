export function Thor(props) {

    const isadmin = true;

    return <>
        <h1>Keep Exploring!!</h1>
        <button type="button"  onClick={props.clickdetail}>Logout</button>
        
        {isadmin && <button type="button">Delete</button>}

    </>

}