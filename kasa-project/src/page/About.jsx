import { useState } from "react";
import img from "../assets/about_cover.png";

export const About = () => {
  const [Fiabilité, setFiabilité] = useState(false);
  const [Respect, setRespect] = useState(false);
  const [Service, setService] = useState(false);
  const [Sécurité, setSécurité] = useState(false);

  const FirstElement = () => {
    setFiabilité(!Fiabilité);
  };
  const SecondElement = () => {
    setRespect(!Respect);
  };
  const ThridElement = () => {
    setService(!Service);
  };
  const FourthElement = () => {
    setSécurité(!Sécurité);
  };

  return (
    <>
      <div className="imgAbout">
        <img src={img} alt="aboutImg" />
      </div>
      <div className="allElementAbout">
        <div className="oneElementAbout">
          <button onClick={FirstElement}>
            Fiabilité
            {Fiabilité ? (
              <span className="arrow-size">&darr;</span>
            ) : (
              <span className="arrow-size">&uarr;</span>
            )}
          </button>
          {Fiabilité && (
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          )}
        </div>
        <div className="oneElementAbout">
          <button onClick={SecondElement}>
            Respect
            {Respect ? (
              <span className="arrow-size">&darr;</span>
            ) : (
              <span className="arrow-size">&uarr;</span>
            )}
          </button>
          {Respect && (
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          )}
        </div>
        <div className="oneElementAbout">
          <button onClick={ThridElement}>
            Service
            {Service ? (
              <span className="arrow-size">&darr;</span>
            ) : (
              <span className="arrow-size">&uarr;</span>
            )}
          </button>
          {Service && (
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N&#39;hésitez pas à nous contacter si vous
              avez la moindre question.
            </p>
          )}
        </div>
        <div className="oneElementAbout">
          <button onClick={FourthElement}>
            Sécurité
            {Sécurité ? (
              <span className="arrow-size">&darr;</span>
            ) : (
              <span className="arrow-size">&uarr;</span>
            )}
          </button>
          {Sécurité && (
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l&#39;hôte qu&#39;au locataire, cela permet à nos équipes de
              vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
