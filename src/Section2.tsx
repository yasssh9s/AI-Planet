import React from "react";
import book from "./assets/icons/carbon_notebook-reference.svg";
import community from "./assets/icons/Vector.svg";
import robot from "./assets/icons/Robot.svg";
import identity from "./assets/icons/IdentificationCard.svg";
import Card from "./Card";

type cardData = {
  imageURL: string;
  title: string;
  description: string;
};

const data: cardData[] = [
  {
    imageURL: book,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    imageURL: community,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    imageURL: robot,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    imageURL: identity,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const Section2 = () => {
  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold text-center mb-20">
        Why Participate in{" "}
        <span className="text-[#0FA958]">AI Challenges?</span>
      </h1>
      <div className="grid grid-cols-2">
        {data.map((item, index) => (
          <Card
            key={index}
            imageURL={item.imageURL}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
