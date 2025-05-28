import axios from "axios";
import { useState, useEffect } from "react";
axios;
const url = "https://lanciweb.github.io/demo/api/actors/";

// presa dei dati

function fetchactor() {
  axios.get(url).then((res) => {
    console.log(res.data);
  });
}

export default function Main() {
  return (
    <>
      <div className="container ">
        <div className="row-cols-3 g-2">
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
