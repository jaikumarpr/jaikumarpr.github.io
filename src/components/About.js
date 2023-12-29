const parent = {
  "margin-top": "60px",
  "text-align": "left",
  "font-family": "'Jost', sans-serif",
};

const summary = `I am a Senior Consultant currently working with mid-size startups to address platform scaling challenges. 
Most of my experience is around building core backend infrastructure and cloud native services.
Previously I partnered with my ex-manager to build a SaaS platform for project risk analysis where I was responsible for design and operations.
My current interests are in applied AI.`;

function About() {
  return (
    <div style={parent}>
      <p>
        {summary}
        <br />
        <br />
      </p>
    </div>
  );
}

export default About;
