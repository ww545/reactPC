import React ,{Component,Fragment} from 'react'
import  {Switch,Route} from 'react-router-dom'
import Permission from "../Permission";
import Richs from "../rich";
import MAPS from "../GPSmap";
import UsesInfo from "../userInfo";
import Chart from "../charts";


class Contents extends Component{

    render(){
        return(
            <Fragment>
                <Switch>
                    <Route  path="/admin"   component={Chart}/>
                    <Route path="/admin/map" component={MAPS}/>
                    <Route path="/admin/permission" component={Permission}/>
                    <Route path="/admin/rich" component={Richs}/>
                    <Route path="/admin/userinfo" component={UsesInfo}/>
                </Switch>
            </Fragment>
        )
    }
}

export default Contents;
