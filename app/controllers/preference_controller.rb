class PreferenceController < ApplicationController
	before_action :authenticate_user!
  def index
  	@user = current_user
  end
  
  def update
  	current_user.update(user_params)
  	redirect_to profile_path
  end

  private
  def user_params
  	params.require(:user).permit(:checklist, :risk, :counter)
  end
end
