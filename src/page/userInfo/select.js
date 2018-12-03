import React,{Component} from 'react'
import { Select } from 'antd';
import axios from "axios/index";
const Option = Select.Option;

class Selectcted extends Component{
        constructor(props){
            super(props)
            this.state={
                city:[],
                provinces:[],
                cities:['北京市'],
                secondCity:[],
                secondvalue:''
            }
        }
    componentDidMount(){
        const that = this;
        axios.get('/city').then(res=>{
            let {data}= res
            that.setState({
                city:data
            });
        })
        axios.get('/province')
            .then(function (res) {
                let {data} =res;
                that.setState({
                    provinces: data
                });
            });
    }
    handleProvinceChange = (value,key) => {
            console.log(value)
        this.setState({
            cities:value,
            secondCity:this.state.city[value],
            secondvalue:''
        })
    }
    onSecondCityChange=(value,key)=>{

            this.setState({
                secondvalue:value
            })
    }
    render(){

        return(
            <div>
               <Select
                   value={this.state.cities}
                    style={{ width:160 }}
                    onChange={this.handleProvinceChange}
                >
                    {  this.state.provinces.map(province =>
                        <Option
                            value={province.id}
                            key={province.name}>{province.name}</Option>)
                    }
                </Select>
                  <Select
                    style={{ width: 160 ,marginLeft:20}}
                    value={this.state.secondvalue}
                    onChange={this.onSecondCityChange}
                >
                    {this.state.secondCity.map(city => <Option key={city.name} value={city.id}>{city.name}</Option>)}
                </Select>

            </div>
        )
    }
}
export default Selectcted