import React from "react";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "NotFound";
  }

  render() {
    return <div>404 Not Found</div>;
  }
}

export default NotFound;
