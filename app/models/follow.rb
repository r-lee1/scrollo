class Follow < ApplicationRecord

  belongs_to(
    :follower,
    class_name: 'User',
    foreign_key: :follower_id,
    primary_key: :id
  )

  belongs_to(
    :followee,
    class_name: 'User',
    foreign_key: :followee_id,
    primary_key: :id
  )
  
end
