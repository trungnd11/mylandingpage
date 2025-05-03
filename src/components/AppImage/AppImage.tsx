import React, {useState} from "react";
import {AppImageProps} from "./interfaces/AppImageProps";

const ImageWithSkeleton: React.FC<AppImageProps> = ({ src, alt, width = '100%', height = 'auto' }) => {
  const [loaded, setLoaded] = useState(false);

  console.log({ src })

  return (
    <div className="image-wrapper" style={{ width, height }}>
      {!loaded && <div className="skeleton-image" />}
      <img
        src={src}
        alt={alt}
        className={`real-image ${loaded ? 'show' : 'hide'}`}
        onLoad={(e) => {
          console.log({ e });
          setLoaded(true)
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
