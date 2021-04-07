import './App.css';
import ProjectCard from './components/ProjectCard'
import Cat from './components/Cat'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Lucas Guzmán-Finn</h1>
        <h3>Assignment 5 I DO</h3>
      </div>
      <div className="projects">
        <h3>PROJECTS (reusing components)</h3>
        <div className="cards">
          <ProjectCard title="Project 1" 
            github="https://www.google.com/" 
            live="https://www.google.com/" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis 
            metus sit amet felis interdum dictum. Curabitur gravida lacus quis nunc fermentum lacinia. Aenean sed quam maximus, posuere magna nec, condimentum felis. "
          />
          <ProjectCard title="Project 2" 
            github="https://www.google.com/" 
            live="https://www.google.com/" 
            description="Ut quis leo nunc. Donec dolor metus, blandit ac ante id, placerat pellentesque purus. Mauris sed nisi a felis finibus imperdiet et ut mi. Maecenas tempus aliquam libero, 
            euismod porta arcu volutpat a. Aenean dictum gravida ornare."
          />
          <ProjectCard title="Project 3" 
            github="https://www.google.com/" 
            live="https://www.google.com/" 
            description="Suspendisse et tellus sit amet turpis rutrum faucibus sed iaculis sem. Cras nec dictum risus. 
            Integer ullamcorper libero a odio feugiat, nec condimentum quam pulvinar."
          />
          <ProjectCard title="Project 4" 
            github="https://www.google.com/" 
            live="https://www.google.com/" 
            description="Suspendisse et tellus sit amet turpis rutrum faucibus sed iaculis sem. Cras nec dictum risus. 
            Integer ullamcorper libero a odio feugiat, nec condimentum quam pulvinar."
          />
        </div>
      </div>
      <div className="cat">
        <h3>CLICK THE CAT (messing around with states)</h3>
        <Cat/>
      </div>
    </div>
  );
}

export default App;
