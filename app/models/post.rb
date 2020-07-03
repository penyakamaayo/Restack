# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  user_id        :bigint
#  title          :string
#  body           :text
#  upvotes        :integer
#  downvotes      :integer
#  total_comments :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Post < ApplicationRecord

	belongs_to :user
	has_many :comments
	has_many :upvotes, dependent: :destroy

	def score
    	upvotes.count
  	end
	
	validates_presence_of :title, :body, :user_id

end
