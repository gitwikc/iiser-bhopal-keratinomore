import * as React from "react";
import HeroSection from "../../../components/layout/HeroSection";
import Paragraph from "../../../components/layout/Paragraph";
import { Link } from "react-router-dom";

import "./index.css";

const Inclusivity: React.FC = () => {
  return (
    <div className="Inclusivity">
      <HeroSection
        title={
          <>
            <span>Inclusivity</span>
            <span>and</span>
            <span>Diversity</span>
          </>
        }
      ></HeroSection>

      <main className="px-64 mt-28">
        <Paragraph
          hierarchy={0}
          title="School Outreach"
          content={
            <>
              As part of our school outreach initiative, we engaged with
              students from diverse socioeconomic backgrounds. These
              interactions took place in local schools situated in the
              surrounding villages near our college. During these visits, we not
              only distributed our educational handbooks but also had valuable
              interactions with the students. These experiences provided
              insights into the unique challenges these young learners face and
              highlighted the limited exposure they have to STEM (Science,
              Technology, Engineering, and Mathematics) fields. Moving forward,
              we are committed to sustaining and expanding our engagement with
              these students, aiming to inspire their interest in STEM subjects.
            </>
          }
        />
        <Paragraph
          hierarchy={0}
          title="SynBio Handbook"
          content={
            <>
              <p>
                Originally, our handbook, "A Beginner's Guide to SynBio," was
                intended to be available only in English. However, during a
                visit to a local high school in Bhauri village, we had the
                opportunity to engage with the school's Principal and teachers.
                They highlighted the significance of using Hindi, the local
                language, to effectively convey the concepts presented in our
                handbook to the students. This insight, which we hadn't
                considered previously, prompted us to translate our handbook
                into Hindi. Subsequently, we distributed the Hindi version to
                several schools in the region, ensuring that the content could
                be more accessible and comprehensible to a wider audience.
              </p>
              <p>
                For more information, visit our{" "}
                <Link className="text-primary-1" to="/education">
                  Education
                </Link>{" "}
                page.
              </p>
            </>
          }
        />
        <Paragraph
          hierarchy={0}
          title="Awareness Survey"
          content={
            <>
              Recognizing India's linguistic diversity, we drew upon our
              experience with the SynBio handbook to enhance our outreach
              efforts. To ensure inclusivity and broader engagement, we took a
              proactive approach by preparing our survey forms in multiple major
              Indian languages. These languages included Hindi, Marathi, Tamil,
              Telugu, Gujarati, Bengali, and Malayalam, in addition to English.
              This strategic decision allowed us to bridge linguistic barriers
              and connect with a more diverse and extensive audience. By
              accommodating various languages, we aimed to gain deeper insights
              and a more comprehensive understanding of the general public about
              the feather waste problem.
            </>
          }
        />
        <Paragraph
          hierarchy={0}
          title="Gender gap in STEM"
          content={
            <>
              <p>
                To address the significant gender disparity in STEM, we
                undertook an initiative to highlight their experiences and the
                hurdles that they have to overcome in their careers. We
                conducted interviews with accomplished female scientists, whose
                inspiring journeys and accomplishments were featured on our
                Instagram page. This multifaceted effort aimed to achieve
                several objectives. Firstly, it served as a platform to explore
                and understand the unique challenges that female scientists
                encounter throughout their careers. By delving into their
                personal narratives, we sought to identify and spotlight the
                barriers that needed dismantling. Secondly, these interviews
                served as a beacon of inspiration for the next generation of
                aspiring female scientists. By sharing these remarkable stories
                and achievements, our initiative aimed to defy stereotypes,
                foster determination, and motivate more girls to embark on STEM
                paths. Through these interviews, we sought to not only
                illuminate the challenges faced by female scientists but also to
                celebrate their achievements, paving the way for a more
                inclusive, diverse, and equitable future in the realm of
                science.
              </p>
              <div className="flex justify-center">
                <img
                  className="w-64"
                  src="https://static.igem.wiki/teams/4958/wiki/inclusivity/women-in-stem.png"
                  alt="Women in Stem"
                />
              </div>
            </>
          }
        />
        <Paragraph
          hierarchy={0}
          title="Wiki"
          content={
            <>
              We intended to make our wiki as inclusive and accessible as
              possible. This had multiple considerations, like colours, fonts,
              etc. “Nunito Sans” was our font of choice. It follows the
              guidelines for making fonts dyslexia-friendly, with its sans serif
              typeface. It is also a monospace font which is easier on the eye
              for everyone. Also, we have minimised italicising text or using
              entirely uppercase words. Our wiki maintains consistency with just
              two fonts, promoting better accessibility for a diverse audience.
              Every page on our wiki features a consistent, single-colour
              background. This deliberate choice reduces visual distractions and
              simplifies the reading experience. We've consciously selected a
              limited colour palette for our website. By minimizing the use of
              contrasting and overly vibrant colours, we reduce visual clutter
              and create a more visually harmonious environment. All of this
              allows us to help ADHD and dyslexic-users to consume our content.
            </>
          }
        />

        <Paragraph
          hierarchy={0}
          title="References"
          content={
            <>
              <div className="references">
                <ol>
                  <li>
                    <a href="https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide">
                      Dyslexia Friendly Style Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://homepage.divms.uiowa.edu/~hourcade/idc2010-myw/mcknight.pdf">
                      https://homepage.divms.uiowa.edu/~hourcade/idc2010-myw/mcknight.pdf
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf">
                      https://www.cs.cmu.edu/~jbigham/pubs/pdfs/2017/colors.pdf
                    </a>
                  </li>
                </ol>
              </div>
            </>
          }
        />
      </main>
    </div>
  );
};

export default Inclusivity;
