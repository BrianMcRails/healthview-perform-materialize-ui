class PreChecksController < ApplicationController

def index
render json: PreCheck.where(:user_id => current_user.id).order(updated_at: :desc)
end
def create
		pre_check = PreCheck.create(check_name: params[:check_name], check_status: params[:check_status], user_id: current_user.id)
		render json: pre_check
	end
 def update
  	current_user.update(pre_check_params)
  	render json: pre_check
 end

   private
  def pre_check_params
  	params.require(:pre_check).permit(:check_status)
  end
end
