import axios from "axios";
import { useState, useEffect } from "react";
axios;
let baseurlApi = "https://lanciweb.github.io/demo/api/actors/";

export default function Main() {
  // presa dei dati
  const [actors, setActors] = useState([]);
  const [femaleActor, setFemaleActor] = useState(baseurlApi);
  const [maleActor, setmaleActor] = useState(femaleActor);

  function fetchactor() {
    axios.get(`${baseurlApi}`).then((res) => {
      setActors(res.data);
    });
    // const setFemaleActor = () => {
    //   baseurlApi = "https://lanciweb.github.io/demo/api/actresses/";
    // };
    // const setmaleActor = () => {
    //   baseurlApi = baseurlApi;
    // };
  }
  useEffect(fetchactor, []);
  return (
    <>
      <div className="bottoncontainer d-flex justify-content-center m-3 gap-2">
        <button className="btn btn-light">Actor</button>
        <button className="btn btn-light">Actress</button>
      </div>

      <div className="container-sm ">
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
