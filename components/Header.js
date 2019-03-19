import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true,
      date: new Date()
    }
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElemet = this.handleElemet.bind(this);
  }

  handlePesan(value, e){
    e.preventDefault()
    alert(this.state.daftar)
    alert(value)
    // alert('Halaman Header')
  }

  componentDidMount(){
    console.log('Jalan : componentDidMount');
  }

  handleElemet(){
    this.setState((state, props) => {
      return {statusRendering: !state.statusRendering}
    })
  }

  render() {
    console.log('Jalan : Render');
    return (
      <div>
        {this.state.statusRendering === true ?
          (
            <div>
              <h1>Selamat Datang</h1>
              <h2>Silakan Pilih Menu Makanan</h2>
              </div>
          ) : (
            <div>
              <h1>Selamat Tinggal</h1>
              <h2>Silakan Datang Kembali</h2>
            </div>
          )
        }
        <button onClick={this.handleElemet}>Click Me!</button>
      </div>
    )





    // return (
    //   // dikeluarkan dari <div>
    //   // <a href="/" onClick={this.handlePesan}>
    //   //   Halaman Header
    //   // </a>
    //   <div>
    //     <h2>Makanan khas Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={(e) => this.handlePesan("Pesan dari header", e)}>
    //       Halaman Header
    //     </a>
    //   </div>
    // )
  }
}

export default Header;
