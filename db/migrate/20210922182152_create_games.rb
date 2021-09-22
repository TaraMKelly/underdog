class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :home_name
      t.string :away_name

      t.timestamps
    end
  end
end
