import Card from "./card/card.jsx";

function Pricing() {
  return (
    <div className="flex gap-10 flex-row max-md:flex-col">
      <Card
        name="Test"
        description="test"
        lists={["Fitur 1", "Fitur 2", "Fitur 3"]}
      />
      <Card
        name="Test"
        description="test"
        lists={["Fitur 1", "Fitur 2", "Fitur 3"]}
      />
      <Card
        name="Test"
        description="test"
        lists={["Fitur 1", "Fitur 2", "Fitur 3"]}
      />
      <Card
        name="Test"
        description="test"
        lists={["Fitur 1", "Fitur 2", "Fitur 3"]}
      />
    </div>
  );
}
export default Pricing;
