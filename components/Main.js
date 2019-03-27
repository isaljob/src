import React, {Component} from 'react';
import menuMakanan from './lib/Food'

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Menu Makanan',
      title2: 'Menu Minuman',
      inputValue: '',
      inputKota: '',
    }
    this.ubahData = this.ubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // ubahData() {
  //   this.setState({title: 'Pilih Makanan'})
  // }

  ubahData() {
    this.setState((state, props) => {
      return {
        // title: 'Pilih Menu Makanan',
        // title2: 'Pilih Menu Minuman'
        title: state.title2,
        title2: state.title
      }
    });
  }

  handleChange(value, e) {
    this.setState({[value]: e.target.value})
    // console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.ubahData}>Ubah Data</button>
        <br/>
        <br/>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e)=>this.handleChange("inputValue", e)}
          placeholder="nama"
        />

        <input
          type="text"
          value={this.state.inputKota}
          onChange={(e)=>this.handleChange("inputKota", e)}
          placeholder="kota"
        />

        {menuMakanan.map((value, index)=> {
          console.log(value);
          console.log(index+1);
          return(
            <div key={index}>
              <p>No : {index+1} </p>
              <p>Nama Makanan: {value.nama}</p>
              <p>Harga: {value.harga}</p>
            </div>
          )
        }
        )}

      </div>
    )
    }
  }

export default Main;
