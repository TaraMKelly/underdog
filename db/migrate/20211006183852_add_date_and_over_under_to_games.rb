class AddDateAndOverUnderToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :game_date, :datetime
    add_column :games, :over_under, :integer
  end
end
