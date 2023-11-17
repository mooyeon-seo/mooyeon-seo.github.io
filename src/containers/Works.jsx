import './Works.css'

import Title from "../components/Title";
import Work from "../components/Work";

export default function Works() {
  return (
    <div className="works">
      <Title title="Work Experience" />
      <Work
        timeline="AUGUST 2023 - PRESENT"
        company={"Raspberry Sherbet".toUpperCase()}
        position="Founder"
        location="North York, Ontario"
        link="https://www.raspberrysherbet.ca/"
        descriptions={[
          "Developed a Single-Page Application with a user-friendly UI",
          "Set up secure and lightning-fast payment methods using Stripe",
          "Wrote 30+ Automated Tests for each feature to ensure high-quality",
        ]}
      />
      <Work
        timeline="APRIL 2023 - PRESENT"
        company={"Softmoc".toUpperCase()}
        position="Key Holder"
        location="North York, Ontario"
        link="https://github.com/mooyeon-seo/RetagEm"
        descriptions={[
          "Became a top-selling salesman out of 20+ employees at the branch within the first two months",
          "Built a mobile application that optimizes the re-tagging process of the shoes in response to frequent store promotions",
        ]}
      />
      <Work
        timeline="MARCH 2023"
        company={"Safe Surfer".toUpperCase()}
        position="iOS Developer"
        location="Tauranga, GIS, New Zealand"
        link=""
        descriptions={[
          "Developed an iOS application by leveraging the Screen Time API, providing regular progress updates to the CEO",
          "Inspired Premium Feature of Somnapp",
        ]}
      />
      <Work
        timeline="JULY 2017 - APRIL 2019"
        company={"Republic of Korea Army".toUpperCase()}
        position="Sergeant"
        location="Paju, The Korean DMZ"
        link="https://www.army.mil.kr/english/index.do"
        descriptions={[
          "Gathered military intelligence from North Korean facilities within the DMZ and promptly delivered comprehensive reports to nearby division headquarters",
        ]}
      />
    </div>
  );
}
