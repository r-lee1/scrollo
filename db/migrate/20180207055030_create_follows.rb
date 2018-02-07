class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false

      t.timestamps
    end

    add_index :follows, :followee_id
    add_index :follows, :follower_id
  end
end