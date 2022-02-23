import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Profile from "../../containers/profile/profile.component.jsx";

import { fetchProfiles } from "../../reduсers/profiles/profiles.actions";

const ProfilesPage = () => {
    // получаем кусок state с постами
    const { profiles, pending, errorMessage } = useSelector((state) => state.profiles)

    // componentDidMount, запрос постов
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfiles());
    }, [dispatch])

    return (
        <div>
            <h1>Profiles</h1>
            {
                pending ?
                    "Загрузка..." :
                    errorMessage ? 
                        `${errorMessage}` : // можно сделать отдельный компонент
                        profiles.length && profiles.map(profile => (<Profile profile={profile} key={profile.id} />))
            }
        </div>
    )
}

export default ProfilesPage;