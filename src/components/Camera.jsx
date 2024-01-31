import React from "react";
import { useRef, useState, useCallback} from "react";
import Webcam from "react-webcam";
import '../App.css'

function Camera() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({width: 500, height: 300});
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Webcam
        audio={false}
        width={780}
        height={480}
        screenshotFormat="image/jpeg"
        mirrored
        ref={webcamRef}
        videoConstraints={videoConstraints}
      ></Webcam>
      <button style={{marginBottom: "20px"}} className="btn" onClick={capture}>Capture</button>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
    </div>
  );
}

export default Camera;
