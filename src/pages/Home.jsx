import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { homeSection } from "../components/data/HomeSection";
import { CoursesSection } from "../components/data/CoursesSection";
import { tutorsSection, tutorsList } from "../components/data/TutorsSection";
import {
  partnersSection,
  partnersList,
} from "../components/data/PartnersSection";
import { contactSection } from "../components/data/ContactSection";
import parse from "html-react-parser";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* Home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>
        {/* Online Courses */}
        <section id="courses">
          <div className="kolom">{parse(CoursesSection.content)}</div>
          <img src={CoursesSection.image} />
        </section>
        {/* Tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {parse(tutorsSection.content)}
              <Tutors tutorsList={tutorsList} />
            </div>
          </div>
        </section>
        {/* Partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              {parse(partnersSection.content)}
              <Partners partnersList={partnersList} />
            </div>
          </div>
        </section>
        {/* Contact */}
        <Contact contactSection={contactSection}/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
