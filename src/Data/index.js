import { URL } from "../Utills/constants";
import { useEffect, useState } from "react";
import Buttons from "../Buttons";
const Data = () => {
    const [info, setInfo] = useState ([]);
    const [users, setUsers] = useState ('users');
    const gettingData = async () => {
        const response = await fetch (`${URL}/${users}`);
        const data = await response.json ();
        setInfo (data);
    }

    useEffect(() => {
        gettingData ()
    }, [users])

    const handleSetInfos = (usersOrPosters) => {
        setUsers (usersOrPosters)
    }
    return (
        <>
        <Buttons handleSetInfos = {handleSetInfos} users = {users} />
        {
            info.map (item => {
            const {name, id, title} = item;
            return <p key={id}>{users === 'users' ? name : title}</p>
            })
        }
        </>
    )

}

export default Data;