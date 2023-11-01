import React from "react";
import timelineData from "./timeline.json";
import EventCard from "./component/EventCard";
import MenuBar from "../component/MenuBar";

interface TimelineData {
  title: string;
  date: string;
  description: string;
}

const Experiences = () => {
  const data: TimelineData[] = timelineData.timelineData;

  return (
    <>
      <MenuBar />
      <div>My Experiences</div>
      {data.map((item, index) => (
        <EventCard
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </>
  );
};

export default Experiences;
