import { useEffect, useState } from "react";

function  useProfile() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/s-satyajit`)
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [])

    return data;
}

export default useProfile;