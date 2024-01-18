import './App.css';

function App() {
  const navItems = [
    {
      text: "Github",
      url: "https://github.com/edsonayllon"
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/edson-ayllon/"
    },
    {
      text: "Medium",
      url: "https://medium.com/@edsonayllon"
    },
    {
      text: "Twitter",
      url: "https://twitter.com/relativeread"
    },
  ]
  return (
    <div className="w-full h-full flex flex-col">
      <div className="container mx-auto p-4">

        <section className="mt-32">
          <h2 className="mb-4 text-xl text-rose-300">Exceptional diligence breeds quality</h2>
          <h1 className="text-5xl">Edson Ayllon<span className="text-white/40">&mdash;Software engineer, digital creator.</span></h1>
        </section>
        <nav className="mt-20">
          <ul className="flex gap-12">
            {
              navItems.map(({ text, url }) => (
                <li>
                  <a className="text-lg" href={url} rel="noopener noreferrer" target="_blank">{text}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
