import React from 'react';

const Footer = (props) => {
  // var name = 'NIOMIC'
  return (
    <div>
      <h4>Halaman Footer {props.name}</h4>
      <p>@{props.tahun}</p>
    </div>
  )
}

export default Footer;
