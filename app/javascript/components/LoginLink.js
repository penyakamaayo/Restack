import React from "react";
import { Link } from "react-router-dom";

var LoginLink = React.createClass({
  render: function() {
    return (
      <div>
        - if controller_name != 'sessions'
        = link_to "Log in", new_session_path(resource_name)
        %br/
        - if devise_mapping.registerable? &amp;&amp; controller_name != 'registrations'
        = link_to "Sign up", new_registration_path(resource_name)
        %br/
        - if devise_mapping.recoverable? &amp;&amp; controller_name != 'passwords' &amp;&amp; controller_name != 'registrations'
        = link_to "Forgot your password?", new_password_path(resource_name)
        %br/
        - if devise_mapping.confirmable? &amp;&amp; controller_name != 'confirmations'
        = link_to "Didn't receive confirmation instructions?", new_confirmation_path(resource_name)
        %br/
        - if devise_mapping.lockable? &amp;&amp; resource_class.unlock_strategy_enabled?(:email) &amp;&amp; controller_name != 'unlocks'
        = link_to "Didn't receive unlock instructions?", new_unlock_path(resource_name)
        %br/
        - if devise_mapping.omniauthable?
        - resource_class.omniauth_providers.each do |provider|
        = link_to "Sign in with #{'{'}OmniAuth::Utils.camelize(provider){'}'}", omniauth_authorize_path(resource_name, provider)
        %br/
      </div>
    );
  }
});