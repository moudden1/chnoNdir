import React from 'react';

function SearchBar() {
  return (
    <div className="SearchBar">
      <h1>BESOIN DE CONSULTER UN ENCADRANT POUR VOTRE FUTUR ? VOUS ÊTES AU BON ENDROIT !</h1>
      <p>Trouvez la personne qui répond à vos besoins en quelques clics.</p>
      <input type="text" placeholder="Recherche" />
      <div className="categories">
        <span>Ingénierie</span>
        <span>Medecine</span>
        <span>L'Art</span>
        <span>Management</span>
      </div>
    </div>
  );
}

export default SearchBar;
