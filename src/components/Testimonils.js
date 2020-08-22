import React from "react";
import ShowMoreText from "react-show-more-text";

function Testimonils() {
  var items = [
    "John Clemens <br> Senior Systems Administrator <br> Illinois Institute of Technology <br> \
    I have had the pleasure (and good fortune) of working with Damini <br> \
    during my campus-wide Enterprise IWMS implementation. \
    She is everything that you could ask in an employee and <br> \
    I hope she stays with us after her student work is over.<br> She works very well with our staff <br> \
    and can handle direction from many “bosses”. She has a great personality and is a pleasure to work with every day.<br> \
    I also can’t say enough about her technical skills. She is able to handle a challenging workload as a student \
    and adjusts well as the work shifts directions as happens many times during implementations.\
    Lastly, and I can’t say enough about this part, is her ability to learn on the fly and work independently.\
    Whether it is JavaScript, CSS, Java, etc., whatever we have thrown at her, \
    Damini has learned and perfected to keep our implementation on track. We probably can’t keep her here at IIT forever,\
    so if you have the chance to work with Damini, please do it. You will not regret it.",

    "Terra Cooney <br> Communications and Operations Manager <br> Illinois Institute of Technology <br> \
    Damini has been a welcomed addition to our <br> Facilities Department at Illinois Tech. In the short quarter <br> \
    that she has been a student employee with us <br> she has been a great source for new ideas and has proven <br> \
    her willingness to learn. She has shown an impressive ability <br> to adapt to departmental needs in order to quickly \
    help develop solutions. Damini has been positive, approachable, and eager to take on new tasks and responsibilities. \
    A dependable addition to the team, she has been working diligently with our Senior Systems Administrator and other \
    leads in the first phases of launching a new work order system for the university. She has written code to help our \
    staff get over hurdles in developing the new system and her work is assured to help the product run more efficiently. \
    Her work has been integral to setting the stage for a successful working program that will make a \
    tremendous impact on the student, staff, and faculty experience in terms of our building and ground maintenance, \
    campus-wide. As an added bonus, Damini brings her wonderful charisma and sense of humor to our office, \
    which has helped her to built relationships quickly with others and to help foster a personable and friendly environment.",

    "Dion Manly <br> Senior Leader in Operational Excellence <br> Illinois Institute of Technology <br> \
    In just over 4 months, Damini has made an impact that simply <br> can’t be overstated. Beginning with her interview, <br> \
    she demonstrated her aptitude for problem solving by diagnosing <br> and addressing a technical issue for our \
    Senior Systems <br> Administrator. Once we hired her, she quickly got up to speed in JavaScript and has been using \
    it to implement complex <br> algorithms to manage billing, priorities, and a host of other system variables designed to improve our operational efficiency. She has successfully navigated a number of technical issues that have surfaced, and often develops creative programming solutions to achieve our objectives. The work Damini has done will positively impact the delivery of facilities services for the entire IIT community for years to come!",
  ];
  return (
    <div className="">
      <h1>Testimonils</h1>
      <br />
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4">
            <ShowMoreText
              lines={10}
              more="Show more"
              less="Show less"
              anchorClass=""
              // onClick={(isExpanded) =>
              //   thexecuteOnClick(isExpanded, setIsStyleClass)
              // }
              expanded={false}
              width={450}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: item,
                }}
              />
            </ShowMoreText>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonils;
