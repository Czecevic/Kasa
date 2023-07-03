import { useState } from "react";
import img from "../assets/about_cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faArrowDown} />
          ) : (
            <FontAwesomeIcon icon={faArrowUp} />
          )}
        </button>
        {Fiabilité ? (
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        ) : (
          !Fiabilité
        )}
      </div>
      <div className="oneElementAbout">
        <button onClick={SecondElement}>
          Respect
          {Respect ? (
            <FontAwesomeIcon icon={faArrowDown} />
          ) : (
            <FontAwesomeIcon icon={faArrowUp} />
          )}
        </button>
        {Respect ? (
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        ) : (
          !Respect
        )}
      </div>
      <div className="oneElementAbout">
        <button onClick={ThridElement}>Service
        {Service ? (
            <FontAwesomeIcon icon={faArrowDown} />
          ) : (
            <FontAwesomeIcon icon={faArrowUp} />
          )}</button>
        {Service ? (
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        ) : (
          !Service
        )}
      </div>
      <div className="oneElementAbout">
        <button onClick={FourthElement}>Sécurité
        {Sécurité ? (
            <FontAwesomeIcon icon={faArrowDown} />
          ) : (
            <FontAwesomeIcon icon={faArrowUp} />
          )}
        </button>
        {Sécurité ? (
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        ) : (
          !Sécurité
        )}
      </div>
    </div>
    </>
  );
};
