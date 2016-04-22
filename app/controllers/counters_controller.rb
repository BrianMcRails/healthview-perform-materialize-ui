class CountersController < ApplicationController

def index
render json: Counter.where(:user_id => current_user.id).order(updated_at: :desc)
end
def create
		counter = Counter.create(counter_title: params[:counter_title], user_id: current_user.id)
		render json: counter
	end
end
