class ShoppingCart
	def initialize(token: )
		@token =token
	end
	def order
		@order ||=Order.find_or_create_by(token: @token) do |order|
			order.sub_total = 0			
	end
	def add_item(washandfold_id:, quantity: 1)
		washandfold = Washandfold.find(Washandfold_id)
		order_item = order.item.find_or_create_by(
			washandfold_id: washandfold_id
			)
		order_item.price = washandfold.price
		order_item.quantity = quantity

		order_item.save
		end
	end
end