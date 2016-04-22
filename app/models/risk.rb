class Risk < ActiveRecord::Base
	validates :risk_score_title, presence: true
	validates :risk_score, presence: true
	belongs_to :user
	
	def as_json(options={})
		super(methods: [:name, :gravatar, :risk_percent, :risk_weight, :risk_comment])
	end
	
	def name
		user.display_name
	end

   	def gravatar
		user.gravatar
	end

	def risk_percent
		if risk_score_title != 'SYNTAX Score'
		risk_score.to_s + '%'
		else risk_score		
		end
	end


	def risk_weight
		if (risk_score.between?(0,20) && risk_score_title!='SCAI PCI Mortality') || (risk_score.between?(0,4) && risk_score_title=='SCAI PCI Mortality')
			'Low'
		elsif (risk_score.between?(21,30) && risk_score_title!='SCAI PCI Mortality') || (risk_score.between?(5,9) && risk_score_title=='SCAI PCI Mortality')
			'Medium'
		elsif (risk_score>=31 && risk_score_title!='SCAI PCI Mortality') || (risk_score>=10 && risk_score_title=='SCAI PCI Mortality')
			'High'
		end
	end

	def risk_comment
		if risk_score_title=='SCAI Acute Kidney Injury' && risk_score>=31
			'  Caution with contrast use.'
		elsif risk_score_title=='SCAI PCI Mortality' && risk_score>=10
			'  Consider alternatives to PCI due to high mortality chance.'
		elsif risk_score_title=='SYNTAX Score' && risk_score>=22
			'  Consider CABG as an alternative due to high chance of revascularization in PCI.'
			
		end

	end

	def self.stream_for(current_user_id)
		joins(:user)
		.where(["users.id = :current_user_id or users.id in (
			select user_id from risks
			where user_id = :current_user_id
			)", {current_user_id: current_user_id }])
		.all
		.order(risk_score: :desc)
	end


end
