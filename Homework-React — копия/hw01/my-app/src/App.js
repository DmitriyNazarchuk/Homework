import "./App.css";
import { data, results, dataEpisodes } from "./HW1/data";
import {SimpleComponent,CharacterCard,Cartoon,} from "./HW1/SimpleComponents";
import { Spoiler,RangeInput,LoginForm, PasswordConfirm,Carousel,Pagination} from "./HW2/Components";

function App() {
     const handleLogin = ({ login, password }) => {
    console.log('Login:', login);
    console.log('Password:', password);}

    const images = [
      "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
      "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
      "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
      "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
      "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
    ];

    
    const Content = ({ page }) => (
      <div style={{ fontSize: '5em' }}>
          Сторінка №{page}
      </div>
  );
  
  const Color = ({ page }) => (
      <div style={{ color: `rgb(${page * 16}, ${page * 16}, ${page * 16})` }}>
          {page}
      </div>
  );

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
        <div className="cartDiv">{dataEpisodes.map((item, index) => (
          <Cartoon
            key={index}
            name={item.name}
            air_date={item.air_date}
            characters={item.characters}
          />
          ))}
        </div>
        <Spoiler header={<h1>Заголовок</h1>} open>
        Контент 1
        <p>
          Лорем ипсум траливалли и тп.
        </p>
      </Spoiler>

      <Spoiler header={<h2>Заголовок 2</h2>}>
        <h2>Контент 2</h2>
        <p>
          Лорем ипсум траливалли и тп.
        </p>
      </Spoiler>
        <div>
          <h1>Range Input Example</h1>
          <RangeInput min={2} max={10} placeholder="Enter text" />
        </div>
        <div>
      <h1>Login Form</h1>
      <LoginForm onLogin={handleLogin} />
      </div>
      <div>
        <h1>Password Confirm Component</h1>
        <PasswordConfirm min={6} />
      </div>
      <div>
      <h1>Image Carousel</h1>
        <Carousel images={images} />
      </div>
      <div>
        <h1>Pagination Example</h1>
        <Pagination max={10} render={Content} />
        <Pagination max={16} render={Color} />
    </div>
      </header>
    </div>
  );
}


export default App;
