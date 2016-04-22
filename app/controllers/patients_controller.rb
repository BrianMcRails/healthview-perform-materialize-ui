class PatientsController < ApplicationController
  
  def index
 	render json: User.where(:id => current_user.id)
  end

end
