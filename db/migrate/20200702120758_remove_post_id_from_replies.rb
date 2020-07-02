class RemovePostIdFromReplies < ActiveRecord::Migration[6.0]
  def change
    remove_column :replies, :post_id, :bigint
  end
end
