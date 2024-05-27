export function SimpleComponent(props) {
  return (
    <div>
      ID Nation: {props.ID_Nation}, 
      Nation: {props.Nation}, 
      ID Year:{props.ID_Year}, 
      Year: {props.Year}, 
      Population: {props.Population},
      Slug Nation: {props.Slug_Nation}
    </div>
  );
}

export function CharacterCard (props) {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = props;
    
    return (
        <div>
            <h2 >{name}</h2>
            <p>Height: {height} cm</p>
            <p>Mass: {mass} kg</p>
            {gender !== 'n/a' && hair_color !== 'none' && <p>Hair Color:  {hair_color}</p>}
            <p>Skin Color: {skin_color}</p>
            <p>Eye Color:<span style={{ color: eye_color }}>{eye_color}</span></p>
            <p>Birth Year:{birth_year}</p>
            {gender !== 'n/a' && <p>Gender:{gender}</p>}
        </div>
    );
};

export function Cartoon(props) {
   const {name, air_date, characters,} = props;

   return (
    <div>
        <h2>{name}</h2>
        <p>{air_date}</p>
        <p>{characters.map(character => character.name).join(', ')}</p>
   
    </div>
   )
}
