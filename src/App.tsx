import Heading from "./components/Heading";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Heading variant="h1">Heading 1</Heading>
      <Heading variant="h2">Heading 2</Heading>
      <Heading variant="h3">Heading 3</Heading>

      <Text size="paragraph">Paragraph</Text>
      <Text size="small">Small</Text>
      <Text size="xs">Extra Small</Text>
      <Text size="2xs">2 Extra Small</Text>
    </>
  );
}

export default App;
