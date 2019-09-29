import React from "react";
import ReactDOM from "react-dom";
import { images } from "./images";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import "./styles.css";

const INITIAL_INDEX = 0;

function App() {
  const [index, setIndex] = React.useState(INITIAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(INITIAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery
      style={{
        width: "100vw",
        height: "100vh",
        background: "black"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
    </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
