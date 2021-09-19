class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :home_name
      t.string :away_name
      t.string :home_price
      t.string :away_price
      t.string :over_under

      t.timestamps
    end
  end
end
