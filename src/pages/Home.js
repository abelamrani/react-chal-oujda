import React, { Component } from "react";

// Components
import AppHeader from "components/AppHeader";
import PriceCard from "components/PriceCard";

// Mocks
import cards from "mocks/cards";

class Home extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <PriceCard cards={cards} />
      </div>
    );
  }
}

export default Home;
