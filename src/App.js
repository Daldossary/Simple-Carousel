import { useState } from "react";
import './App.css';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const imageList = [
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
    "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
    "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
  ];
  let listLength = imageList.length - 1;

  function prevImg() {
    setCurrentImage(currentImage === 0 ? listLength : currentImage - 1);
  }

  function nextImg() {
    setCurrentImage(currentImage === listLength ? 0 : currentImage + 1);
  }

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <div className="carousel">
        <img src={imageList[currentImage]} alt="Carousel Item"></img>
        <div className="buttons">
          <button onClick={prevImg}>&laquo;</button>
          <button onClick={nextImg}>&raquo;</button>
        </div>

      </div>
    </div>
  );
}