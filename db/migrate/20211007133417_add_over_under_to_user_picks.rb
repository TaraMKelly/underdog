class AddOverUnderToUserPicks < ActiveRecord::Migration[6.1]
  def change
    add_column :user_picks, :over_under, :string
  end
end
