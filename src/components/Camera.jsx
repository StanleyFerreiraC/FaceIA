import React from "react";
import Webcam from "react-webcam";

function Camera() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Webcam
        audio={false}
        width={780}
        height={700}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        videoConstraints={videoConstraints}
      ></Webcam>
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}

export default Camera;
