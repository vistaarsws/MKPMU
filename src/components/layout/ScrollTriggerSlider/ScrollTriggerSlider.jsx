import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollTriggerSlider.css";
import { useGSAP } from "@gsap/react";
import pict1 from "../../../assets/images/1.jpg";
import pict2 from "../../../assets/images/2.jpg";
import pict3 from "../../../assets/images/3.jpg";
import pict4 from "../../../assets/images/4.jpg";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerSlider() {
  const boxRef = useRef(null);

  useGSAP(
    () => {
      // Timeline 1
      const tl_1 = gsap.timeline();

      tl_1.from(".innerCardLeft_1", {
        scrollTrigger: {
          trigger: ".innerCardLeft_1",
          start: "top top",
          end: "bottom top",
          toggleActions: "play pause pause reverse",
          scrub: true,
          pin: true,
          onLeave: () =>
            gsap.set(".innerCardLeft_1", { inset: "-100% auto auto 0%" }),
        },
      });

      tl_1.fromTo(
        ".innerCardRight_1",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          scrollTrigger: {
            trigger: ".innerCardRight_1",
            start: "top top",
            end: "bottom top",
            toggleActions: "play pause pause reverse",
            scrub: true,
            pin: true,
            onLeave: () =>
              gsap.set(".innerCardRight_1", { inset: "-100% auto auto 0%" }),
          },
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
        }
      );

      tl_1.from(".action", {
        scrollTrigger: {
          trigger: ".action",
          toggleActions: "play pause pause reverse",
          start: "top 15%",
          end: "+=200%",
          pin: true,
          // onchange: () => gsap.to(".action2", { position: "absolute" }),
        },
      });

      tl_1.from(".innerImageTop_1", {
        scrollTrigger: {
          trigger: ".innerImageTop_1",
          start: "top top",
          end: "bottom top",
          toggleActions: "play pause pause reverse",
          scrub: true,
          pin: true,
          onLeave: () =>
            gsap.set(".innerImageTop_1", { inset: "-100% auto auto 0%" }),
        },
      });

      tl_1.fromTo(
        ".innerImageBottom_1",
        { clipPath: "inset(0% 0% 0% 100%)" },
        {
          scrollTrigger: {
            trigger: ".innerImageBottom_1",
            start: "top top",
            end: "bottom top",
            toggleActions: "play pause pause reverse",
            scrub: true,
            pin: true,
            onLeave: () =>
              gsap.set(".innerImageBottom_1", { inset: "-100% auto auto 0%" }),
          },
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
        }
      );

      // Timeline 2 (Repeats Timeline 1's behavior with new elements)
      const tl_2 = gsap.timeline();

      tl_2.from(".innerCardLeft_2", {
        scrollTrigger: {
          trigger: ".innerCardLeft_2",
          start: "top top",
          end: "bottom top",
          toggleActions: "play pause pause reverse",
          scrub: true,
          pin: true,
          onLeave: () =>
            gsap.set(".innerCardLeft_2", { inset: "-100% auto auto 0%" }),
        },
      });

      tl_2.fromTo(
        ".innerCardRight_2",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          scrollTrigger: {
            trigger: ".innerCardRight_2",
            start: "top top",
            end: "bottom top",
            toggleActions: "play pause pause reverse",
            scrub: true,
            pin: true,
            onLeave: () =>
              gsap.set(".innerCardRight_2", { inset: "-100% auto auto 0%" }),
          },
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
        }
      );

      tl_2.from(".action2", {
        scrollTrigger: {
          trigger: ".action2",
          toggleActions: "play pause pause reverse",
          start: "top 15%",
          end: "bottom top",
          pin: true,
        },
      });

      tl_2.from(".innerImageTop_2", {
        scrollTrigger: {
          trigger: ".innerImageTop_2",
          start: "top top",
          end: "bottom top",
          toggleActions: "play pause pause reverse",
          scrub: true,
          pin: true,
          onLeave: () =>
            gsap.set(".innerImageTop_2", { inset: "-100% auto auto 0%" }),
        },
      });

      tl_2.fromTo(
        ".innerImageBottom_2",
        { clipPath: "inset(0% 0% 0% 100%)" },
        {
          scrollTrigger: {
            trigger: ".innerImageBottom_2",
            start: "top top",
            end: "bottom top",
            toggleActions: "play pause pause reverse",
            scrub: true,
            pin: true,
            onLeave: () =>
              gsap.set(".innerImageBottom_2", { inset: "-100% auto auto 0%" }),
          },
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
        }
      );
    },
    { scope: boxRef }
  );

  return (
    <section>
      <div ref={boxRef} className=" relative">
        <div className="box action">
          {/* First set of transitions */}
          <section className="contentTransition_box">
            <div className="innerCardLeft_1 innerCard">
              <h2>BEFORE</h2>
              <div>
                <h1>64%</h1>
                <h3>
                  of People <span>Migrated</span> for livelihood because of the
                  water scarcity for domestic and agriculture purposes.
                </h3>
              </div>
              <p>
                The total main workers account to about 47.6% of the total
                population. The remaining
                <span>52.4% are the dependent population.</span>
              </p>
            </div>
            <div className="innerCardRight_1 innerCard">
              <h2>NOW</h2>
              <h3>
                <span>Employment potential</span> increased
              </h3>
              <div>
                <h1>3 Times</h1>
              </div>
              <h4>that of before the project phase for a cropped area. </h4>
              <p>
                <span>
                  7.5 lakh families and 168 Villages are likely to be benefited
                </span>
                (directly or indirectly) by the project by the end of year 2050.
              </p>
            </div>
          </section>
          <section className="imageTransition_box">
            <figure className="innerImageTop_1 innerImage">
              <img src={pict1} alt="" />
            </figure>
            <figure className="innerImageBottom_1 innerImage">
              <img src={pict2} alt="" />
            </figure>
          </section>
        </div>

        <div className="box action2">
          {/* Second set of transitions (Repeats the first set) */}
          <section className="contentTransition_box">
            <div className="innerCardLeft_2 innerCard">
              <h2>BEFORE</h2>
              <div>
                <h1>64%</h1>
                <h3>
                  of People <span>Migrated</span> for livelihood because of the
                  water scarcity for domestic and agriculture purposes.
                </h3>
              </div>
              <p>
                The total main workers account to about 47.6% of the total
                population. The remaining
                <span>52.4% are the dependent population.</span>
              </p>
            </div>
            <div className="innerCardRight_2 innerCard">
              <h2>NOW</h2>
              <h3>
                <span>Employment potential</span> increased
              </h3>
              <div>
                <h1>3 Times</h1>
              </div>
              <h4>that of before the project phase for a cropped area. </h4>
              <p>
                <span>
                  7.5 lakh families and 168 Villages are likely to be benefited
                </span>
                (directly or indirectly) by the project by the end of year 2050.
              </p>
            </div>
          </section>
          <section className="imageTransition_box">
            <figure className="innerImageTop_2 innerImage">
              <img src={pict1} alt="" />
            </figure>
            <figure className="innerImageBottom_2 innerImage">
              <img src={pict2} alt="" />
            </figure>
          </section>
        </div>
      </div>
    </section>
  );
}
