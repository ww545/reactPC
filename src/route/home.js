import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Auth from "../page/auth";



const {Fragment} =React;
export default class Router extends React.Component{
    render(){
        return(
            <Fragment>
                    <Route  path='/'    component={Auth}/>
            </Fragment>
        )
    }
}