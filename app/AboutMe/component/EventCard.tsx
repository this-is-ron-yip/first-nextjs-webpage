import React from "react";
import styles from "./EventCard.module.css";

interface Props {
  title: string;
  date: string;
  description: string;
}

const EventCard = ({ title, date, description }: Props) => {
  return (
    <table>
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
    </table>
  );
};

export default EventCard;
