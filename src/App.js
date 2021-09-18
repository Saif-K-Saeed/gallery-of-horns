import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json'
import Form from 'react-bootstrap/Form';

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
  filterArray = (num) => {
    let filterarr = data.filter(element => {
      if (num === 0) {
        return element;
      } else {
        if (element.horns === num) {
          return true;
        }
        else {
          return false;
        }
      }
    });
    return filterarr;

  }

  filter = async (event) => {
    event.preventDefault();
    await this.setState({
      numumberhoners: event.target.value,
      all: this.filterArray(Number(event.target.value))
    });
  };

  render() {
    return (
      <>
        <Header />   <Form.Select name="hor" aria-label="Default select example" onChange={this.filter}>
          <option>Filter a  number of horns</option>
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">100</option>
        </Form.Select>

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
