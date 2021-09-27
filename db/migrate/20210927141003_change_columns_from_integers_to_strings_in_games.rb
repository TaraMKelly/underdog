class ChangeColumnsFromIntegersToStringsInGames < ActiveRecord::Migration[6.1]
  def change
    change_column :games, :away_ml, :string
    change_column :games, :home_ml, :string
    change_column :games, :away_spread, :string
    change_column :games, :home_spread, :string
    change_column :games, :away_price, :string
    change_column :games, :home_price, :string
  end
end
