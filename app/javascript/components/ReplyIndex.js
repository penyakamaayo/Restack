import React from "react";
import { Link } from "react-router-dom";

var ReplyIndex = React.createClass({
  render: function() {
    return (
      <div>
        .comments_section
        .container
        .row
        .col-md-12
        %p#notice
        = notice
        - replies.each do |reply|
        .row.comments_tab
        .col-md-12.border-top
        %comment_body
        = reply.body
        %br
        %commented_by
        = User.find(reply.user_id).username
        replied
      </div>
    );
  }
});