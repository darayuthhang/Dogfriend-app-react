import React from 'react';


import DogList from '../components/DogList.js';
import DropDown from '../components/DropDown.js';
import "./app.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      "dogTypes": "",
      "dogs": []
    }
  }

  handleDropDown = (event) => {
    this.setState({
      dogTypes:event.target.value,
    })
   
    //this.componentDidMount();
  }


  componentDidMount(){
    let url;
    url = "https://dog.ceo/api/breed/husky/images"
    this.getApi(url);
  }

  getApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => { this.setState({ dogs: data }) });
  }



  render() {
    if(this.state.dogTypes !== ""){
      let { dogTypes } = this.state;
      const url = `https://dog.ceo/api/breed/${dogTypes}/images`;
      this.getApi(url);
    }
  

    if(this.state.dogs.length === 0){
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <DropDown dropDownBox={this.handleDropDown}/>
          <DogList dogs={this.state.dogs} />
        </div>
      );
    }
  }
}
 

export default App;
