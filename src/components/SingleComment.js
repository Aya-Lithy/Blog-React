import React, { Component } from "react";
import moment from "moment";

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import renderHTML from "react-render-html";

class SingleComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
    };
    this.addComment = this.addComment.bind(this);
  }

  showComment = (props) => {
    if (!props.post) return null;

    const { name, email, body, datestamp } = this.props.comment;

    return (
      <React.Fragment>
        <Paper className="single_comment">
          <p>
            <b>Name:</b> {name}
          </p>
          <Divider light />
          <p>
            <b>Email:</b> {email}
          </p>
          <Divider light />
          <p>
            <b>Comment:</b> {body}
          </p>
          <Divider light />
          <h5>Created At: {moment(datestamp).format("DD MM YYYY")}</h5>
          <div style={{ width: "60%" }}>{renderHTML(body)}</div>
        </Paper>
      </React.Fragment>
    );
  };

  render() {
    return <div className=" col-md-10">{this.showComment(this.props)}</div>;
  }
}

export default SingleComment;
