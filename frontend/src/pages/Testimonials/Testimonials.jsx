import {
  testimonialSlides_array,
  actual_testimonials_array,
  testimonialHeader,
} from "../../utils/Constant";
import { EmblaSlider } from "../../components/ui/Slider/EmblaSlider";
import "./Testimonials.css";
import Header from "../../components/ui/Header/Header";

export default function Testimonials() {
  return (
    <>
      <Header
        title={testimonialHeader.title}
        description={testimonialHeader.description}
        bgColor="#CBE55847"
        titleColor="#9EC828"
      />
      <div className="testimonials_slider">
        {/* 
 <article>
   <EmblaSlider
     slides={testimonialSlides_array}
     no_of_slides={2}
     delay={1000}
     autoScroll={true}
     navigationDots={false}
   />
 </article> */}
        <article>
          <EmblaSlider
            slides={actual_testimonials_array}
            no_of_slides={1}
            navigationArrow={true}
            delay={5000}
            autoScroll={false}
            autoSlide={false}
            navigationDots={false}
          />
        </article>
      </div>
    </>
  );
}
