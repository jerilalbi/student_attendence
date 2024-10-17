import React from "react";
import "./StudentCard.css";

function StudentCard({ data }) {
  return (
    <div className="studenCard">
      <div
        className="studentImg"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      />
      <div className="studentDetailsBx">
        <span className="studentName">{data.name}</span>
        <span className="studentRole">{data.role}</span>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <span>Email:</span>
          <div style={{ minWidth: 0 }}>
            <span className="studentEmail">{data.email}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <div className="blockBtn">Block</div>
          <div className="detailsBtn">Details</div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
