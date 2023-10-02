import HeroSection from "../../components/layout/HeroSection";
import TeamList from "../../components/ui/TeamList";
// import AttributionsBackground from "/hero-bg/attributions.jpg";
// import MemberPic from "/members/guy.jpg";

const Attributions = () => (
  <div className="Attributions">
    <HeroSection
      title={
        <>
          <span>Attributions</span>
        </>
      }
    />

    <main className="px-64">
      <TeamList
        members={Array(12).fill({
          name: "Lorem Ipsum",
          bio: "College student, iGEM web dev. Blending biology and code for innovative solutions. Passionate about tech, genetics, and teamwork.",
          department: "Web Dev",
          imageURL:
            "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/08/21/c080045a-e333-40c5-aee8-17c42ce9b47e_65e19817.jpg?itok=KNdRuSea&v=1692611441",
          major: "EECS",
          year: 3,
        })}
      />
    </main>
  </div>
);

export default Attributions;
