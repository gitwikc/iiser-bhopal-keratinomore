import HeroSection from "../components/layout/HeroSection";
import TeamList from "../components/ui/TeamList";
import TeamMember from "../components/ui/TeamList/TeamMember";
import AttributionsBackground from "/hero-bg/attributions.jpg";
import Sattwik from "/members/sattwik.png";

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

    <main>
      <TeamList
        members={Array(12).fill({
          name: "Sattwik Sahu",
          bio: "Our web developer who's incidentally not a spider. He loves Spider-Man though.",
          department: "Web Dev",
          imageURL: Sattwik,
          major: "EECS",
          year: 3,
        })}
      />
    </main>
  </div>
);

export default Attributions;
