import React from "react";
import { Link } from "react-router-dom";

var CommentsIndex = React.createClass({
  render: function() {
    return (
      <div>
        .comments_section
        .container
        .row
        .col-md-12
        %p#notice
        = notice
        - comments.each do |comment|
        .row.comments_tab
        .col-md-12.border-top
        %comment_body 
        = comment.body
        %reply_link
        = link_to raw('<i className="fa fa-reply" aria-hidden="true" /> Reply'), comment
        %br
        %commented_by
        = User.find(comment.user_id).username
        commented on #{'{'}@post.created_at.strftime("%B %d %Y, %l:%M%P"){'}'}
      </div>
    );
  }
});