class ServiceController < ApplicationController
	
	def index
		@service = Service.all
		@types = Service.select(:ServiceType).uniq
	end

end
