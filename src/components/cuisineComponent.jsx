const CuisineComponent = ({array}) => {
  return (
    <div>
      {array.map((location, index) => (
        <div key={index}>
          <h2>{location.name}</h2>
          <p>{location.content}</p>
          <ul>
            {location.funFact.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CuisineComponent;