import { Fade } from "react-awesome-reveal";

const projectTitle = () => {
  return (
    <section id="project" className="mx-auto max-w-6xl px-6">
      <div className="projectWrap">
        <Fade direction="left" delay={800} triggerOnce>
          <h1 className="titleStyle">
          Proj<span style={{ color: "#d66853" }}>e</span>cts
          </h1>
        </Fade>
      </div>
    </section>
  );
};

export default projectTitle;
