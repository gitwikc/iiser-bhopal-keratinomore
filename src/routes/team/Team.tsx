import HeroSection from "../../components/layout/HeroSection";
import "./Attribution.css";
import TeamList from "../../components/ui/TeamList";

const Team = () => (
    <div className="Attributions">
      <HeroSection
        title={
          <>
            <span>Team</span>
          </>
        }
      />
        <main>
        <TeamList
        members={Array(12).fill({
          name: "Name",
          bio: "Tinder user",
          department: "EECS",
          imageURL:
            "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/08/21/c080045a-e333-40c5-aee8-17c42ce9b47e_65e19817.jpg?itok=KNdRuSea&v=1692611441",
          major: "EECS",
          year: 3,
        })}
      />
        </main>
      
    </div>
  );
  
  export default Team;