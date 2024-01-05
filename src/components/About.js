import styled from "styled-components";

const ParentDiv = styled.section`
margin-top: 50px;
text-align: justify;
font-family: 'Jost', sans-serif;
line-height: 1.3;
`

const summary = "I am a Senior Consultant currently working with mid-size startups to address platform scaling challenges. Most of my experience is around building core backend infrastructure and cloud native services. Previously I partnered with my ex-manager to build a SaaS platform for project risk analysis where I was responsible for design and operations.My current interests are in applied AI.";

function About() {
  return (
    <ParentDiv>
      <p>
        {summary}
      </p>
    </ParentDiv>
  );
}

export default About;
