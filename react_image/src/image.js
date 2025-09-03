// import car_image from "./car_1.jpg"  
import car_image from "./image/car_3.jpg"

export function Image() {
    return <>
        <h1>Render Image</h1>
        <img src = {process.env.PUBLIC_URL + "./car_2.jpg"} alt="" width="300px" />

        <img src={car_image} alt="" width="300px" />

    </>

}