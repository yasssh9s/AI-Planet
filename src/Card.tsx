import React from "react";
type CardProps = {
  imageURL: string;
  title: string;
  description: string;
};

const Card = ({ imageURL, title, description }: CardProps) => {
  return (
    <div className="bg-[#F8F9FD] my-3 p-10 flex flex-col items-start gap-3 rounded-3xl w-11/12">
      <img src={imageURL} alt="" height={50} width={50} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="opacity-80">{description}</p>
    </div>
  );
};

export default Card;
