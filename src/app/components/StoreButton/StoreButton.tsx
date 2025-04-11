import React, { FC } from "react";
import Image from "next/image";

type ButtonProps = {
  theme?: "dark" | "light";
  height?: number;
  width?: number;
  logo: string; // image path, e.g. /assets/google-play.svg
  storeName: string;
  title: string;
  url: string;
  className?: string;
  border?: number;
};

const Button: FC<ButtonProps> = ({
  theme = "light",
  height = 50,
  width = 180,
  border = 10,
  logo,
  storeName,
  title,
  url,
  className = "",
}) => {
  const themeStyles =
    theme === "dark"
      ? "bg-[#202020] text-white border-[#202020]"
      : "bg-white text-black border-gray-300";

  return (
    <div
      className={`flex items-center gap-3 p-2 border-2 rounded-lg cursor-pointer transition-all ${themeStyles} ${className}`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
        borderRadius: `${border}px`,
      }}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="relative w-6 h-6 sm:w-8 sm:h-8">
        <Image src={logo} alt={storeName} fill />
      </div>
      <div className="flex flex-col items-start font-outfit leading-none">
        <span className="text-[10px] sm:text-xs">{title}</span>
        <span className="text-sm sm:text-lg font-bold">{storeName}</span>
      </div>
    </div>
  );
};

export default Button;
