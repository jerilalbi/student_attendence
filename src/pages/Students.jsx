import React, { useContext } from "react";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import { NavBarContext } from "../provider/NavBarProvider";

const studentData = [
  {
    name: "Curtis Jone",
    role: "Web Developer",
    email: "curtisjones14@gmail.com",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isActive: true,
  },
  {
    name: "Jeril Albi",
    role: "Web Developer Intern",
    email: "jerilalbi11@gmail.com",
    img: "https://jerilalbi.github.io/assets/images/about.png",
    isActive: true,
  },
  {
    name: "Darwin nunez",
    role: "Full Stack Developer",
    email: "darwinnuz26780@microsoft.com",
    img: "https://images.pexels.com/photos/16695059/pexels-photo-16695059/free-photo-of-portrait-og-man-in-beard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    isActive: false,
  },
  {
    name: "Luiz diaz",
    role: "Front End Developer",
    email: "luisdiaz14@gmail.com",
    img: "https://images.pexels.com/photos/17544859/pexels-photo-17544859/free-photo-of-close-up-of-man-face.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    isActive: false,
  },
  {
    name: "Muhammed Salah",
    role: "Software Engineer",
    email: "mosalah11@gmail.com",
    img: "https://images.pexels.com/photos/14446258/pexels-photo-14446258.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    isActive: true,
  },
  {
    name: "Alexander Arnold",
    role: "Back End Developer",
    email: "alexarnold66@gmail.com",
    img: "https://images.pexels.com/photos/8727335/pexels-photo-8727335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    isActive: true,
  },
  {
    name: "Robertson",
    role: "Flutter Developer",
    email: "robertson26@gmail.com",
    img: "https://images.pexels.com/photos/13921948/pexels-photo-13921948.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    isActive: true,
  },
  {
    name: "Alison",
    role: "Python Developer",
    email: "alison1@gmail.com",
    img: "https://images.pexels.com/photos/2131590/pexels-photo-2131590.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    isActive: true,
  },
];

function Students() {
  const { navPos, query } = useContext(NavBarContext);
  const filterdStudents = studentData
    .filter((student) => {
      if (navPos === "all") return true;
      if (navPos === "active") return student.isActive;
      if (navPos === "inactive") return !student.isActive;
      return true;
    })
    .filter((student) => student.name.toLowerCase().includes(query));
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "teal",
        padding: "15px 24px",
        boxSizing: "border-box",
        // backgroundImage:
        //   "radial-gradient(farthest-side at 60% 20%, var(--secondary-color), var(--primary-color))",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {filterdStudents.map((studentData) => (
          <StudentCard data={studentData} />
        ))}
      </div>
    </div>
  );
}

export default Students;
