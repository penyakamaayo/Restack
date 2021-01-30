import React from "react";
import { Link } from "react-router-dom";

var PostForm = React.createClass({
  render: function() {
    return (
      <div>
        .container
        .row
        .col-md-3
        .col-md-6
        %br
        %ask
        Ask a Question
        %br
        - @post.tags.build
        = form_for @post do |form|
        .form-group
        %post_title_text
        = label_tag :title
        = form.text_field :title, class: "form-control"
        .form-group
        %post_body_text
        = label_tag :body
        = form.text_area :body, class: "form-control"
        .form-group
        = render :partial =&gt; 'tags/form', |
        :locals =&gt; {'{'}:form =&gt; form{'}'} |
        %br
        = form.submit "Submit", class: "btn btn-primary float-right"
        = link_to "Back to Posts", posts_path(), class: "mr-2 btn btn-primary float-right"
      </div>
    );
  }
});