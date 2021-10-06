class CreateUserPicks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_picks do |t|
      t.datetime :game_date
      t.boolean :over
      t.boolean :under
      t.string :team_picked
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
