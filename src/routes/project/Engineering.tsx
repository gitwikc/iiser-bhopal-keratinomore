import HeroSection from "../../components/layout/HeroSection";
import Paragraph from "../../components/layout/Paragraph";
import SlideScroller from "../../components/ui/SlideScroller";
import Slide from "../../components/ui/SlideScroller/Slide";
import BgImage from "../../../public/hero-bg/engineering.jpg";

import "./Engineering.css";

const Engineering = () => (
  <div className="Engineering">
    <HeroSection
      title="Engineering Success"
      description="Hacking our way to success!"
      imageURL={BgImage}
      imageCredit={
        <>
          Photo by{" "}
          <a href="https://unsplash.com/@_louisreed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Louis Reed
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/pwcKF7L4-no?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </>
      }
    />

    <main>
      {/* <SlideScroller title="Make a Sandwich">
        <Slide title="Think of your sandwich" cycle={1} stage="design">
          <Paragraph
            title="Dream"
            hierarchy={0}
            content="A dream is what gets you started on your sandwich"
          />
          <Paragraph
            title="Ideate"
            hierarchy={0}
            content="Jotting down these ideas on a paper helps you visualize it"
          />
        </Slide>
        <Slide title="Put it Together" cycle={1} stage="build">
          <Paragraph
            title="Go Shopping"
            hierarchy={0}
            content={
              <>
                What better place to shop than your local supermarket?
                <Paragraph
                  hierarchy={1}
                  title="Bread"
                  content={
                    <ol>
                      <li>The finest bread in the bakery section</li>
                      <li>
                        The sandwich was supposed to be healthy, so multigrain
                        was chosen
                      </li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Veggies"
                  content={
                    <ol>
                      <li>Cucumber</li>
                      <li>Onions</li>
                      <li>Tomatoes</li>
                      <li>Olives</li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Sauces"
                  content={
                    <ol>
                      <li>Mayonnaise</li>
                      <li>Barbeque</li>
                      <li>Mint Mayo</li>
                    </ol>
                  }
                />
              </>
            }
          />
        </Slide>
        <Slide cycle={1} stage="test" title="Taste your Creation">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>
      </SlideScroller> */}
      <SlideScroller title="Make a Sandwich">
        <Slide title="Think of your sandwich" cycle={1} stage="design">
          <Paragraph
            title="Dream"
            hierarchy={0}
            content="A dream is what gets you started on your sandwich"
          />
          <Paragraph
            title="Ideate"
            hierarchy={0}
            content="Jotting down these ideas on a paper helps you visualize it"
          />
        </Slide>
        <Slide title="Put it Together" cycle={1} stage="build">
          <Paragraph
            title="Go Shopping"
            hierarchy={0}
            content={
              <>
                What better place to shop than your local supermarket?
                <Paragraph
                  hierarchy={1}
                  title="Bread"
                  content={
                    <ol>
                      <li>The finest bread in the bakery section</li>
                      <li>
                        The sandwich was supposed to be healthy, so multigrain
                        was chosen
                      </li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Veggies"
                  content={
                    <ol>
                      <li>Cucumber</li>
                      <li>Onions</li>
                      <li>Tomatoes</li>
                      <li>Olives</li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Sauces"
                  content={
                    <ol>
                      <li>Mayonnaise</li>
                      <li>Barbeque</li>
                      <li>Mint Mayo</li>
                    </ol>
                  }
                />
              </>
            }
          />
        </Slide>
        <Slide cycle={1} stage="test" title="Taste your Creation">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>
        <Slide cycle={1} stage="learn" title="Have a Glass of Milk">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>

        <Slide title="Think of your sandwich" cycle={2} stage="design">
          <Paragraph
            title="Dream"
            hierarchy={0}
            content="A dream is what gets you started on your sandwich"
          />
          <Paragraph
            title="Ideate"
            hierarchy={0}
            content="Jotting down these ideas on a paper helps you visualize it"
          />
        </Slide>
        <Slide title="Put it Together" cycle={2} stage="build">
          <Paragraph
            title="Go Shopping"
            hierarchy={0}
            content={
              <>
                What better place to shop than your local supermarket?
                <Paragraph
                  hierarchy={1}
                  title="Bread"
                  content={
                    <ol>
                      <li>The finest bread in the bakery section</li>
                      <li>
                        The sandwich was supposed to be healthy, so multigrain
                        was chosen
                      </li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Veggies"
                  content={
                    <ol>
                      <li>Cucumber</li>
                      <li>Onions</li>
                      <li>Tomatoes</li>
                      <li>Olives</li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Sauces"
                  content={
                    <ol>
                      <li>Mayonnaise</li>
                      <li>Barbeque</li>
                      <li>Mint Mayo</li>
                    </ol>
                  }
                />
              </>
            }
          />
        </Slide>
        <Slide cycle={2} stage="test" title="Taste your Creation">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>
        <Slide cycle={2} stage="learn" title="Have a Glass of Milk">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>

        <Slide title="Think of your sandwich" cycle={3} stage="design">
          <Paragraph
            title="Dream"
            hierarchy={0}
            content="A dream is what gets you started on your sandwich"
          />
          <Paragraph
            title="Ideate"
            hierarchy={0}
            content="Jotting down these ideas on a paper helps you visualize it"
          />
        </Slide>
        <Slide title="Put it Together" cycle={3} stage="build">
          <Paragraph
            title="Go Shopping"
            hierarchy={0}
            content={
              <>
                What better place to shop than your local supermarket?
                <Paragraph
                  hierarchy={1}
                  title="Bread"
                  content={
                    <ol>
                      <li>The finest bread in the bakery section</li>
                      <li>
                        The sandwich was supposed to be healthy, so multigrain
                        was chosen
                      </li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Veggies"
                  content={
                    <ol>
                      <li>Cucumber</li>
                      <li>Onions</li>
                      <li>Tomatoes</li>
                      <li>Olives</li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Sauces"
                  content={
                    <ol>
                      <li>Mayonnaise</li>
                      <li>Barbeque</li>
                      <li>Mint Mayo</li>
                    </ol>
                  }
                />
              </>
            }
          />
        </Slide>
        <Slide cycle={3} stage="test" title="Taste your Creation">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>
        <Slide cycle={3} stage="learn" title="Have a Glass of Milk">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>
      </SlideScroller>
      {/* <SlideScroller title="Make a Sandwich">
        <Slide title="Think of your sandwich" cycle={1} stage="design">
          <Paragraph
            title="Dream"
            hierarchy={0}
            content="A dream is what gets you started on your sandwich"
          />
          <Paragraph
            title="Ideate"
            hierarchy={0}
            content="Jotting down these ideas on a paper helps you visualize it"
          />
        </Slide>
        <Slide title="Put it Together" cycle={1} stage="build">
          <Paragraph
            title="Go Shopping"
            hierarchy={0}
            content={
              <>
                What better place to shop than your local supermarket?
                <Paragraph
                  hierarchy={1}
                  title="Bread"
                  content={
                    <ol>
                      <li>The finest bread in the bakery section</li>
                      <li>
                        The sandwich was supposed to be healthy, so multigrain
                        was chosen
                      </li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Veggies"
                  content={
                    <ol>
                      <li>Cucumber</li>
                      <li>Onions</li>
                      <li>Tomatoes</li>
                      <li>Olives</li>
                    </ol>
                  }
                />
                <Paragraph
                  hierarchy={1}
                  title="Sauces"
                  content={
                    <ol>
                      <li>Mayonnaise</li>
                      <li>Barbeque</li>
                      <li>Mint Mayo</li>
                    </ol>
                  }
                />
              </>
            }
          />
        </Slide>
        <Slide cycle={1} stage="test" title="Taste your Creation">
          <Paragraph
            hierarchy={0}
            title="Bite by Bite"
            content={
              <>
                <p>Don't rush through your sandwich, let the taste sink in</p>
                <div className="flex justify-center">
                  <img
                    className="w-3/5 my-auto rounded-md"
                    src="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  />
                </div>
              </>
            }
          />
        </Slide>
      </SlideScroller> */}
    </main>
  </div>
);

export default Engineering;
