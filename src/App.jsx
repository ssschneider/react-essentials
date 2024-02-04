import { CoreConcepts } from "./components/core-concepts";
import { ExampleSection } from "./components/examples";
import { Header } from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <ExampleSection />
      </main>
    </div>
  );
}

export default App;
