import HeroSection from "../../components/layout/HeroSection";
import TeamList from "../../components/ui/TeamList";
import AttributionsBackground from "/hero-bg/attributions.jpg";
import MemberPic from "/members/guy.jpg";

const Attributions = () => (
  <div className="Attributions">
    <HeroSection
      imageURL={AttributionsBackground}
      title="Attributions"
      description="Those who lent a helping hand in this incredible journey"
      imageCredit={
        <>
          Photo by{" "}
          <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Markus Spiske
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/MbG7kwWptII?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </>
      }
    />

    <main className="px-64">
      <TeamList
        members={Array(12).fill({
          name: "Lorem Ipsum",
          bio: "College student, iGEM web dev. Blending biology and code for innovative solutions. Passionate about tech, genetics, and teamwork.",
          department: "Web Dev",
          imageURL: MemberPic,
          major: "EECS",
          year: 3,
        })}
      />
    </main>
  </div>
);

export default Attributions;
