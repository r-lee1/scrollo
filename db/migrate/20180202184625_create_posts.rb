class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :post_type, null: false
      t.string :title
      t.string :body
      t.string :source
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :posts, :author_id
  end
end
