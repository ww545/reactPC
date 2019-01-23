import React from 'react';
import { Map,Markers    } from 'react-amap';
const styleC = {
    background: `url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542818222855&di=a68606642a31ca3ef6023f85b291c916&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F09%2F20%2F1657e0f6b697710.jpg')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '30px',
    height: '40px',
    color: '#000',
    textAlign: 'center',
    lineHeight: '40px'
}
const style = {
    padding: '8px',
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #fff',
};
const randomPosition = () => ({
    longitude:  117.594807 - Math.random() * 0.12,
    latitude: 34.867248 - Math.random() * 0.072,
})

const randomMarker = (len) => (
    Array(len).fill(true).map((e, idx) => ({
        position: randomPosition()
    }))
);


 //121.339157,31.516552
// { longitude:121.339157, latitude: 31.516552 }

 class Maps extends React.Component{
    constructor(props){
        super(props)
        this.mapCenter =  { longitude: 117.594807, latitude: 34.867248  }
        this.state = {
            useCluster: false,
            markers: randomMarker(10),
            center:{ longitude: 117.594807, latitude: 34.867248  }
        };


    }
    componentDidMount(){
      //  alert("即将进入传送门，请注意骑手动向")
      this.randomMarkers();
    }
     randomMarkers=()=> {
         this.setState({
             markers: randomMarker(10)
         })
     // setTimeout(this.randomMarkers,2000)
     }





     renderMarkerLayout(extData){
         return <div style={styleC}>{extData.myLabel}</div>
     }
     render(){
         return(
             <div style={{width:'80vw',height:'80vh'}}>
                 <Map
                     amapkey={'37b37a5bc4b667d9cc201a27a7e18d8f'}
                     zoom={12}
                     center={this.state.center}
                 >
                     <Markers
                         events={this.markerEvents}
                         markers={this.state.markers}
                         useCluster={this.state.useCluster}
                         render={this.renderMarkerLayout}
                     />
                 </Map>
                 <button onClick={this.randomMarkers}>瞬间转移 传送门</button>
             </div>
         )
     }
 }

export default Maps;