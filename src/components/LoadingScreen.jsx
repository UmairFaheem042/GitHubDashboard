import React from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="loadingScreen">
      <TailSpin
        visible={true}
        height="100"
        width="100"
        // color="#ffa116"
        color="#763ec6"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default LoadingScreen;
