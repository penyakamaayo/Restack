class ApplicationController < ActionController::Base

	def index    
	   unless current_user
	     redirect_to new_user_session_path, notice: 'You are not logged in.'
	   end
	end

end
