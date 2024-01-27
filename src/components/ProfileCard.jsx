import React from "react";

const ProfileCard = () => {
  const linkData = [
    {
      title: "GitHub",
      url: "#",
    },
    {
      title: "Frontend Mentor",
      url: "#",
    },
    {
      title: "LinkedIn",
      url: "#",
    },
    {
      title: "Twitter",
      url: "#",
    },
    {
      title: "Instagram",
      url: "#",
    },
  ];

  return (
    <div className="bg-fmDarkGrey font-inter flex w-full max-w-[385px] flex-col items-center justify-center rounded-xl p-5 lg:p-10">
      {/* upper container  */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-[90px] overflow-hidden rounded-full">
          <img src="./avatar-jessica.jpeg" alt="" />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col items-center justify-center gap-1">
            <h2 className="text-2xl font-semibold text-white">
              Jessica Randall
            </h2>
            <h3 className="text-fmGreen text-sm font-semibold">
              London, United Kingdom
            </h3>
          </div>
          <p className="mb-5 text-sm text-gray-300">
            "Front-end developer and avid reader."
          </p>
        </div>
      </div>
      {/* lower container  */}
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {linkData.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="bg-fmGrey w-full rounded-lg py-3 text-center text-sm font-semibold text-white"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
