import React from "react";

class About extends React.Component {
  state = {
    flag: false,
  };

  render() {
    return (
      <div>
        <span>About page</span>
        <br />
        <button
          onClick={() => {
            this.setState({ flag: !this.state.flag });
          }}
        >
          Replace Data by Element
        </button>
        <br />
        {this.state.flag ? <span>Flag is set</span> : <span>Flag is down</span>}
      </div>
    );
  }
}

export default About;
