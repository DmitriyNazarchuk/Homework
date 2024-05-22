import "./App.css";
import { data, results, dataEpisodes } from "./HW1/data";
import {
  SimpleComponent,
  CharacterCard,
  Cartoon,
} from "./HW1/SimpleComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data.map((item, index) => (
            <SimpleComponent key={index} {...item} />
          ))}
        </div>
        <div>
          {results.map((item, index) => (
            <CharacterCard key={index} {...item} />
          ))}
        </div>
        {dataEpisodes.map((item, index) => (
          <Cartoon
            key={index}
            name={item.name}
            air_date={item.air_date}
            characters={item.characters}

          />
        ))}
      </header>
    </div>
  );
}

export default App;
