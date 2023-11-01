import React from "react";
import MenuBar from "../component/MenuBar";

const Projects = () => {
  return (
    <>
      <MenuBar />
      <div>Projects</div>
    </>
  );
};
//   <table>
//   <thead>
//     <tr>
//       <th>title</th>
//       <th>date</th>
//       <th>description</th>
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((row, index) => (
//       <tr key={index}>
//         <td>{row.title}</td>
//         <td>{row.date}</td>
//         <td>{row.description}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
export default Projects;
