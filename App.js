import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 className='head' tabIndex='5'>
    Title Component
  </h1>
);

// Component Composition - Combining multiple components into a single component
const HeadingComponent = () => (
  <div id='container'>
    <TitleComponent />
    <h1 className='heading'> React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
