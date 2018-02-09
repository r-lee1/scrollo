class Like < ApplicationRecord

  belongs_to(
    :liker,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :liked_post,
    class_name: 'Post',
    foreign_key: :post_id,
    primary_key: :id
  )

end
