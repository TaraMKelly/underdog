class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :away_team
      t.string :home_team
      t.integer :away_ml
      t.integer :home_ml
      t.integer :away_spread
      t.integer :home_spread
      t.integer :away_price
      t.integer :home_price

      t.timestamps
    end
  end
end
