import React from "react";
import { Link } from "react-router-dom";

var PostShow = React.createClass({
  render: function() {
    return (
      <div>
        .indexp
        .container
        .row
        .col-md-12.box.mt
        .row
        .col-md.12.mt-0
        %post_by_show 
        #{'{'}@post.user.username{'}'} posted on #{'{'}@post.created_at.strftime("%B %d %Y, %l:%M%P"){'}'} · #{'{'}@post.upvotes.count{'}'}
        - if @post.upvotes.count == 1
        upvote
        - else
        upvotes
        %br/
        %post_title 
        = @post.title
        %post_tags 
        Tags:
        = join_tags(@post)
        %post_body 
        = simple_format @post.body
        - if true
        - vote = Upvote.new post_id: @post.id
        %upvote
        = form_for vote, url: post_upvotes_path(post_id: @post.id), remote: true do |f|
        = f.hidden_field :user_id, value: current_user.id
        = f.submit 'UPVOTE THIS POST', class: 'upvote-submit'
        .row
        .col-md-12
        = render 'comments/index', comments: @post.comments
        = render 'comments/form', comment: Comment.new, post_id: @post.id
      </div>
    );
  }
});