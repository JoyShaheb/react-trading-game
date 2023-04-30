import { FC } from "react";

interface iDisplay {
  currency: string;
  digits: number;
  color: string;
  text: string;
}

const Display: FC<iDisplay> = ({ currency, digits, color, text }) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className={`text-lg ${color}`}>
        {currency} {digits}
      </h4>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default Display;
