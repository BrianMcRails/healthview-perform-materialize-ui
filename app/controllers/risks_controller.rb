class RisksController < ApplicationController


	def index
		render json: Risk.stream_for(current_user.id)
	end

	def create
		risk = Risk.create(risk_score_title: params[:risk_score_title], risk_score: params[:risk_score], user_id: current_user.id)
		render json: risk
	end
end
