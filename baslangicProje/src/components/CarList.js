//functional component bu
//http isteği göndermek için başka bir tür component var bu class based
//class based componenta çevirdim

import React,{Component} from 'react';
import { View,ScrollView } from 'react-native'; 
import axios from 'axios';

import CarDetail from './CarDetail';

class CarList extends Component{//extend ile react componentinin tüm özelliklerini aktardık
   constructor(){
       super();

       this.state={carList: []};

   } 
    
    componentDidMount(){
        axios.get('https://givecars.herokuapp.com')
         .then((response)=>{
             this.setState({carList: response.data});
         });
    }

renderList = () =>{
    return this.state.carList.map((brand)=>{
        return <CarDetail key={brand.model[0].name} brand={brand}/>

    });
}
   render(){
       console.log(this.state);
    return(
        <ScrollView>
            {this.renderList()}
        </ScrollView>
            
    );
  }
}

export default CarList;