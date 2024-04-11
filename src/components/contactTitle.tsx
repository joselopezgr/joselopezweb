import { Fade } from "react-awesome-reveal";

 const contactTitle = () => {
    return (
      <section id="contactT" className="mx-auto max-w-6xl px-6">
        <div className="contactWrap">
        <Fade direction="right" delay={800} triggerOnce>
          <h1 className="titleStyle text-right">
           Contact M<span style={{ color: "#d66853" }}>e</span>
          </h1>
        </Fade>
        </div>
        </section>
    );
    }


    export default contactTitle;