class Comment < ApplicationRecord
  belongs_to :game
  belongs_to :user

  def who_wrote_comment 
    writer = User.find(self.user_id)
    writer.username
  end

end
