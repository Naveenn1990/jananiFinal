import React, { useEffect } from "react";

function PageLoader() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign("/home");
    }, 3000);
  }, []);

  return (
    <>
      <div className="">
        <div
          className="loader"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          
          <img src="../img/loader.gif" alt="loader" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default PageLoader;
