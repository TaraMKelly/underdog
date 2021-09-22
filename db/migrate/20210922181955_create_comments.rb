class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :game_id
      t.string :user_id
      t.string :comment

      t.timestamps
    end
  end
end
