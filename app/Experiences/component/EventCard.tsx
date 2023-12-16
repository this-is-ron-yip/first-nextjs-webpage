import React from "react";
import styles from "./EventCard.module.css";

interface Props {
  title: string;
  date: string;
  description: string;
}

const EventCard = ({ title, date, description }: Props) => {
  return (
    <div className="justify-center">
      <h1 className="text-lg hover:text-xl">{title}</h1>
      <div className="h-5 w-5 rounded-full bg-white"></div>
      <h1 className="text-base">{date}</h1>
    </div>
    
  );
};

export default EventCard;

{/* <table>
<tbody>
  <tr>
    <td className={styles.dateCell}>{date}</td>
    <td className={styles.dotCell}>
      <div className={styles.dot} />
      <div className={styles.verticalLine} />
    </td>
    <td className={styles.titleCell}>{title}</td>
    <td className={styles.descriptionCell}>{description}</td>
  </tr>
</tbody>
</table> */}