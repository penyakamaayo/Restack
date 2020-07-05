import React from "react";
import { Link } from "react-router-dom";

var Application = React.createClass({
  render: function() {
    return (
      <div>
        %html
        %head
        %meta{'{'}:content =&gt; "text/html; charset=UTF-8", "http-equiv" =&gt; "Content-Type"{'}'}/
        %title Restack
        = csrf_meta_tags
        = csp_meta_tag
        = stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload'
        = javascript_include_tag 'application', 'data-turbolinks-track': 'reload'
        %body
        = render partial: "layouts/header"
        = yield
      </div>
    );
  }
});