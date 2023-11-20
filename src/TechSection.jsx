import html from "./assets/html-icon.png";
import css from "./assets/css-icon.png"
import react from "./assets/react-icon.png";
import js from "./assets/js-icon.png";


function TechSection() {
  return (
    <>
      <div class="techtitle">
        <h1 class="section-title">Tecnologias</h1>
        <div />
        <div class="techContainer">
          <div class="technology">
            <img src={html} alt="" />
            <h2 class="technology-title">HTML</h2>
            <div class="technology-box"></div>
          </div>

          <div class="technology">
            <img src={css} alt="" />
            <h2 class="technology-title">CSS</h2>
            <div class="technology-box"></div>
          </div>

          <div class="technology">
            <img src={react} alt="" />
            <h2 class="technology-title">React</h2>
            <div class="technology-box"></div>
          </div>

          <div class="technology">
            <img src={js} alt="" />
            <h2 class="technology-title">Javascript</h2>
            <div class="technology-box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechSection;
