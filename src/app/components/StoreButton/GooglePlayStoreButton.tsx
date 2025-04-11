import React, { FC } from "react";
import GooglePlay  from "@/assets/Google-play.svg"
import Button from "./StoreButton";

type GooglePlayButtonProps = {
  /**
   * @default dark
   */
  theme?: "dark" | "light";

  /**
   * @default GET IT ON
   */
  title?: string;

  /**
   * @default 60px
   */
  height?: number;

  /**
   * @default 180px
   */
  width?: number;

  /**
   * @default ''
   */
  className?: string;

  /**
   * @default ''
   */
  url: string;
};


const GooglePlayButton: FC<GooglePlayButtonProps> = ({
  theme = "light",
  height,
  title = "GET IT ON",
  width,
  className,
  url,
}) => {
  return (
    <Button
      theme={theme}
      height={height}
      width={width}
      url={url}
      storeName={"Google Play"}
      logo={GooglePlay}
      className={className}
      title={title}
    />
  );
};

export default GooglePlayButton;