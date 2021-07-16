import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { useAuth } from "../auth/auth";


export const PrivateRoute = ({ component: Component, ...rest }) => {
  //const [authenticated, setAuthenticated] = useState(false);

  const { currentUser} = useAuth();

  console.log(currentUser);
 // console.log(isAuthenticated);

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          currentUser ? (
            <div>
              
              <Component {...props} />
            
            </div>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </>
  );
};
