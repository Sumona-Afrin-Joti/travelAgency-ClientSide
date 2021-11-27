import { useEffect, useState } from "react"

const usePlaces = () =>{
    const [places, setplaces] = useState([]);

    useEffect(() => {
        fetch("https://pacific-reef-35293.herokuapp.com/places")
            .then(res => res.json())
            .then(data => setplaces(data))
    }, [])

    return places;
}

export default usePlaces;