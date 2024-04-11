import { Fade } from "react-awesome-reveal";

 const aboutTitle = () => {
    return (
      <section id="about" className="mx-auto max-w-6xl px-6">
        <div className="aboutWrap">
        <Fade direction="right" delay={800} triggerOnce>
          <h1 className="titleStyle text-right">
           About M<span style={{ color: "#d66853" }}>e</span>
          </h1>
        </Fade>
        </div>
        </section>
    );
    }


    export default aboutTitle;