import React from "react";
import Link from "next/link";
import Image from "next/image";
const WorkCard = ({ img, name, description, url }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative overflow-hidden h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <Link href={url}>
          <Image
            alt={name}
            className="rounded-lg overflow-hidden"
            src={img}
            width={1024}
            height={1024}
          ></Image>
        </Link>
        <h1 className="mt-3 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
      </div>
    </div>
  );
};

export default WorkCard;