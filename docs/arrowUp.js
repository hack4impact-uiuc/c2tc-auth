import * as React from "react";

export default class ArrowUp extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "auto", marginBottom: "auto" }}>
        {this.props.children}
        <svg
          style={
            this.props.down
              ? { transform: "rotate(90deg)" }
              : { transform: "rotate(270deg)" }
          }
          xmlns="http://www.w3.org/2000/svg"
          width={`${this.props.scale * 60}`}
          height={`${this.props.scale * 60}`}
          viewBox="0 0 24 24"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
    );
  }
}
