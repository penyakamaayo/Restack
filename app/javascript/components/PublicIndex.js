import React from "react";
import { Link } from "react-router-dom";

var PublicIndex = React.createClass({
  render: function() {
    return (
      <div>
        .container
        .row
        .col
        = link_to "Create New Post", new_post_path(@post), class: "btn btn-primary float-right"
        = link_to "View All Posts", posts_path(), class: "mr-1 btn btn-primary float-right"
      </div>
    );
  }
});