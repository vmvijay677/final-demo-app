import { useEffect, useState } from 'react';
import './index.css';

const API = "https://vigneshrapp.herokuapp.com";
export default function App() {
  // const mobiles = [
  //   {
  //     model: "OnePlus 9 5G",
  //     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //     company: "OnePlus"
  //   },
  //   {
  //     model: "Iphone 13 Mini",
  //     img: "https://www.reliancedigital.in/medias/Apple-iPhone-13-Mini-Smartphones-491997720-i-5-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDkwMjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2hjOC85NjM3MzM2Nzc2NzM0LmpwZ3w5YTQzZWFhY2NjZTc5NzFkZDNhMWMxYWUzYzQ4NDdhZWRlZDc4ZTJkODBiNWI4NTg3MmU5MzE5ZTQ5ODVhZmFk",
  //     company: "Apple"
  //   },
  //   {
  //     model: "Samsung S21 Ultra",
  //     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
  //     company: "Samsung"
  //   },
  //   {
  //     model: "Xiaomi Mi 11",
  //     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
  //     company: "Xiaomi"
  //   }];
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs));
  }, [])

  return (
    <div className="App">
      <div className="phone-list-container">
        {mobiles.map((mobile) => <Phone mobile={mobile} />)}
      </div>
    </div>
  );
}

function Phone({ mobile }) {
  return (
    <div className='phone-container'>
      <img className="phone-picture" src={mobile.img} alt={mobile.model}></img>
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}

