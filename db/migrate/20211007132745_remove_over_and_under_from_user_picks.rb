class RemoveOverAndUnderFromUserPicks < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_picks, :over, :boolean
    remove_column :user_picks, :under, :boolean
  end
end
