import * as React from "react";
import Paragraph from "../../../../components/layout/Paragraph";

const Spreading: React.FC = () => {
  return (
    <div className="Spreading">
      <Paragraph
        hierarchy={0}
        title=""
        content={
          <>
            <p>
              Our conversations with the people around us and our stakeholders
              told us that the majority were unaware of the problems associated
              with mismanagement of poultry feather waste. We also realised that
              the problem of feather waste largely goes unnoticed by the public
              and media due to its benign nature.{" "}
            </p>
            <p>Hence, we decided to conduct a survey with a dual purpose:</p>
            <p>
              <ul className="list-disc pl-8">
                <li>
                  To understand the general public's awareness and perception
                  about this issue.
                </li>
                <li>To disseminate information on it.</li>
              </ul>
            </p>
            <p>
              In one of our conversations, Dr. Lavanya Bhagavatula suggested
              that we investigate the effect of fast food chains on increased
              chicken consumption. We also wanted to know if there was any
              change in the awareness of this issue, depending on whether or not
              the person consumed chicken
            </p>
            <p>
              To make our survey accessible to a wider range of people and
              include the voices of people from diverse backgrounds, we
              translated our survey form into the following main regional
              languages: Bengali, Gujarati, Hindi, Malayalam, Marathi, Tamil,
              and Telugu.
            </p>
            <p>
              Here is the link to our{" "}
              <a
                className="font-semibold text-primary-1"
                href="https://drive.google.com/file/d/1se5MNKvpubeW-vixJ9dE3-96sg7nBE8k/view?usp=sharing"
              >
                Survey Questions.
              </a>{" "}
            </p>
          </>
        }
      />
    </div>
  );
};

export default Spreading;
