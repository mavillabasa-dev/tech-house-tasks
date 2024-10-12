import React from "react";
import { TrashIcon } from "@primer/octicons-react";


interface ICardProps {
  title: string;
  subtitle: string;
}

export const Card = ({ title }: ICardProps) => {
  return (
    <div className="flex justify-between items-center my-3 p-4 border border-gray-300 shadow-md rounded-sm ">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices
          mauris. Cursus urna
        </p>
      </div>
      <div className="flex">
        <button className="text-gray-500">
          <TrashIcon size={"small"} />
        </button>
      </div>
    </div>
  );
};
