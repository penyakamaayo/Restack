import React from "react";
import { Link } from "react-router-dom";

var ReplyForm = React.createClass({
  render: function() {
    return (
      <div>
        .container
        .row
        .col-md.12
        = form_with(model: reply, local: true) do |form|
        .field
        %br
        = form.text_area :body
        = form.hidden_field :comment_id, value: comment_id
        %p
        .actions
        %comment_submit
        = form.submit 'Reply to comment', class: "btn btn-primary"
        %p
        = link_to 'Back', post_path(@comment.post_id)
      </div>
    );
  }
});