import React from "react";
import Foto from "../../Assets/Images/MainPhoto.JPG";
export default function About() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">A model based in Argentina</h1>
      <div className="about-description">
        <div className="about-image">
          <img src={Foto} alt=""></img>
        </div>
        <p>
          Ea reprehenderit mollit dolore cupidatat ad est cillum deserunt.
          Tempor excepteur esse aliquip dolor cupidatat pariatur mollit
          excepteur laborum commodo. Esse aute tempor irure proident deserunt
          commodo dolore eiusmod fugiat culpa ipsum qui irure ex. Ad nulla elit
          incididunt anim veniam ex aliquip incididunt id. Fugiat reprehenderit
          veniam ullamco voluptate est sint aliquip ullamco et. Reprehenderit
          dolore adipisicing mollit non enim anim irure aliqua veniam ad. Fugiat
          laborum et id ullamco consectetur consectetur do esse incididunt sunt
          irure ex. Amet labore aliqua et duis nulla reprehenderit aliqua
          ullamco velit Lorem nostrud labore. Nostrud anim est enim
          reprehenderit est consectetur excepteur exercitation Lorem.
        </p>
      </div>
    </div>
  );
}
