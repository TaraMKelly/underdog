class Game < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments

    def formatted_date
        self.game_date.strftime("%B %-d, %Y")
    end

end
