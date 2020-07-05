import React from "react";
import { Link } from "react-router-dom";

var TagForm = React.createClass({
  render: function() {
    return (
      <div>
        = form.fields_for :tags do |tag_form|
        .field
        %post_tags_text
        = tag_form.label :name, 'Tags (Separate by Commas):'
        = tag_form.text_field :name, class: "form-control"
        - unless tag_form.object.nil? || tag_form.object.new_record?
        .field
        = tag_form.label :_destroy, 'Remove:'
        = tag_form.check_box :_destroy
      </div>
    );
  }
});