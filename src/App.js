import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data.json'
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      show: false,
      dataModel: {},
      numumberhoners: 0,
      all: data
    }
  }


  selectedCard = (title) => {
    let dataModel = data.find(data => {
      if (data.title === title) {
        return data;
      }
    })
    this.setState({
      show: true,
      dataModel: dataModel
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <>
        <Header></Header>

        <Main data={this.state.data}
          selectedCard={this.selectedCard}
          all={this.state.all} />

        <SelectedBeast dataModel={this.state.dataModel}
          handleClose={this.handleClose}
          show={this.state.show} />

        <Footer></Footer>

      </>
    )
  }
}

export default App;
