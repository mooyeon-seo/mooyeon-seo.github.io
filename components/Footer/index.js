import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-30 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact</h1>
          <div className="mt-10">
            <h2 className="text-3xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl text-bold mb-3">
              DO YOU WANT ME TO
            </h2>
            <h2 className="text-3xl tablet:text-4xl laptop:text-5xl laptopl:text-5xl text-bold">
              JOIN YOUR TEAM? 🚀
            </h2>
            <Button type="primary">
              <Link href={"mailto:mooyeon.dev@gmail.com"}>
                Shoot me an email ❤
              </Link>
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{"Brian"}
        <Link href="http://www.chetanverma.com">
          <a className="underline underline-offset-1">Chetan Verma</a>
        </Link>
      </h1> */}
    </>
  );
};

export default Footer;
