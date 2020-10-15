import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminEmail, setAdminEmail] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/getAddEmail?email="+loggedInUser.email)
        .then(res=>res.json())
        .then(data => setAdminEmail(data))
    }, [])
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                   loggedInUser.email || loggedInUser.name || adminEmail.email  ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default PrivateRoute;