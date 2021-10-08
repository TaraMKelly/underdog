class AddGameToUserPicks < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_picks, :game, null: false, foreign_key: true
  end
end
