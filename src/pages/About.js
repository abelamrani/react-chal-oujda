import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <h2 className="mbr-section-title align-center pb-3 mbr-fonts-style display-2">
          ABOUT US
        </h2>
        <div className="media-container-column col-lg-8 ">
          <h4 className="mbr-section-title align-center pb-3 mbr-fonts-style display-4">
            Hello ! We are SQLI GROUO
          </h4>
          <p className="align-center pb-3 mbr-fonts-style">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
