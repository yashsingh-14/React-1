import { useAvenger } from "./userdefineduseeffect";

export function Shield() {

    const power1 = useAvenger()
    const power2 = useAvenger()
    const power3 = useAvenger()

    return <>

        <h1>Power of Iron Man is 😎: {power1.power}</h1>
        <button type="button" onClick={power1.increase}>Energy</button>
        
        <h1>Power of Captain America is 😃 : {power2.power}</h1>
        <button type="button" onClick={power2.increase}>Energy</button>
        
        <h1>Power of Hulk is 😁 : {power3.power}</h1>
        <button type="button" onClick={power3.increase}>Energy</button>



    </>
}