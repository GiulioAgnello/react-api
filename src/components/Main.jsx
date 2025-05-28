import axios from "axios";
import { useState, useEffect } from "react";
axios;
const url = "https://lanciweb.github.io/demo/api/actors/";

export default function Main() {
  // presa dei dati
  const [actors, setActors] = useState([]);

  function fetchactor() {
    axios.get(url).then((res) => {
      setActors(res.data);
      console.log(res.data);
    });
  }
  useEffect(fetchactor, []);
  return (
    <>
      <div className="container ">
        <div className="row g-2">
          {actors.map((actor) => (
            <div key={actor.id} className="col-3  ">
              <div className="card vh-100">
                <img
                  src={actor.image}
                  className="card-img-top "
                  alt={actor.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{actor.name}</h5>
                  <hr />
                  <small>Anno di nascita: {actor.birth_year}</small>
                  <small> Nazionalità: {actor.nationality}</small>
                  <hr />
                  <p className="card-text fs-6">{actor.biography}</p>
                  <hr />
                  <small>Awards: {actor.awards}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
