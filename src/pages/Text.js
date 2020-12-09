import React, { Component } from "react";

import "../index.css";

class Text extends Component {
  state = {
    italic: false,
  };

  click = () => {
    this.state.italic === false
      ? this.setState((this.state = { italic: true }))
      : this.setState((this.state = { italic: false }));
    console.log(this.state.italic);
  };

  render() {
    return (
      <div
        className={this.state.italic === true ? "text-style" : ""}
        onClick={this.click}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        ipsa enim mollitia exercitationem explicabo repellendus deleniti quidem
        dolore, cum magni quod tempore voluptate unde laudantium molestias
        excepturi rem velit reprehenderit ipsum nesciunt? Quae laborum quasi,
        amet, illo, aliquam totam provident est dignissimos praesentium tempora
        libero ex. Incidunt, placeat optio. Corrupti.
      </div>
    );
  }
}

export default Text;
