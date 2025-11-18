import React from "react";

const Pokemon = ({ data }) => {
  const types = data.types.map(t => t.type.name);
  const typeLabel = types.length > 1 ? "Typer:" : "Typ:";

  return (
    <div className="pokemonInfo">
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>
        <strong>{typeLabel}</strong> {types.join(", ")}
      </p>
      <p><strong>Vikt:</strong> {data.weight}</p>
      <p><strong>Längd:</strong> {data.height}</p>
    </div>
  );
};

export default Pokemon;
