class PreCheck < ActiveRecord::Base
	belongs_to :user
	
	def as_json(options={})
		super(methods: [:active])
	end

	def active
		user.checklist
	end

end
