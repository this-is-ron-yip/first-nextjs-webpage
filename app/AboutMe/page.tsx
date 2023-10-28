import React from "react";
import timelineData from "./timeline.json";
import EventCard from "./component/EventCard";

interface TimelineData {
  title: string;
  date: string;
  description: string;
}

const AboutMe = () => {
  const data: TimelineData[] = timelineData.timelineData;

  return (
    <>
      <div>AboutMe</div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>date</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.title}</td>
              <td>{row.date}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default AboutMe;
