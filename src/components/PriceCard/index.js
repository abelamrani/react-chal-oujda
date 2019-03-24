import React, { Component } from "react";

class AppHeader extends Component {
  render() {
    const cards = this.props.cards;
    console.log(cards);

    return (
      <div className="card-deck mb-3 text-center">
        {cards.map((card, index) => (
          <div className="card mb-4 shadow-sm" key={index}>
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{card.title}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                ${card.price} <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{card.privileges.users}</li>
                <li>{card.privileges.storage}</li>
                <li>{card.privileges.support}</li>
                <li>{card.privileges.help}</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AppHeader;
