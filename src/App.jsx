import Layout from "./components/Layout";
import Grid from "./components/Grid";
import WorkoutCard from "./components/WorkoutCard"; 
import Hero from "./components/Hero";

function App() {
  return (
  <Layout>
    <main>
      <Hero />
      <Grid />
      
    </main>
  </Layout>
  );  
}

export default App;
