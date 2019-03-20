import React, {Component} from 'react';
import Images from './Images'

class List extends Component {
  render() {
    return (
      <ol>
        <Images
          linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
          lebar="500"
          />
        <li>Nasi Padang</li>
        <Images
          linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
          lebar="400"
          />
        <li>Sate Madura</li>
        <Images
          linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          lebar="300"
          />
        <li>Sate Padang</li>
        <Images
          linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
          lebar="200"
          />
      </ol>
    )
  }
}

export default List;
