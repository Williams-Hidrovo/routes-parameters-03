import { useNavigate } from "react-router-dom";
import { ICategorias } from "../Interfaces/Icategoria";
import { useState } from "react";

export const FilterMenu = () => {
  const [categoria, setCategoria] = useState<ICategorias>(ICategorias.Todos);
  const navigate=useNavigate();

  const handleNavigate=() =>{
    navigate(`/products?categoria=${categoria}`)
  }

  return (
    <div style={{ display: "flex", height: "40px" }}>

      <select name="" id=""
      value={categoria}
      onChange={(e) => setCategoria(e.target.value as ICategorias)}
      >
        <option value={ICategorias.Todos}>Todos</option>
        <option value={ICategorias.Electronicos}>Electronicos</option>
        <option value={ICategorias.Gamer}>Gamer</option>
        <option value={ICategorias.Musica}>Musica</option>
        <option value={ICategorias.Telefonos}>Telefonos</option>
        <option value={ICategorias.Componentes}>Componentes</option>
      </select>

      <button onClick={handleNavigate}>
        Buscar
      </button>
    </div>
  );
};
