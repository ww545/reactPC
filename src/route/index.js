import React ,{Fragment} from 'react';
import { Route , Switch,Redirect } from 'react-router-dom';

import Login from '../page/login/index'
import Auth from '../page/auth/index'
import Admin from '../page/home/admin'

export default class Router extends React.Component{
    render(){
        return(
            <Fragment>
                <Auth />
                <Switch>
                    <Redirect exact from="/" to="/admin"></Redirect>
                    <Route   path='/admin'   component={Admin} />
                    <Route  path='/login'   component={Login} />
                </Switch>
             </Fragment>
        )
    }
}