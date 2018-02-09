json.extract! post,
              :id,
              :post_type,
              :title,
              :body,
              :source,
              :author_id
json.author post.author.username
json.current_user_to_author_follow post.author.follower_to_user_follows.where(follower_id: current_user.id)
json.current_user_likes (post.likers.any? { |liker| liker.id === current_user.id })
json.likes_count post.likes.count
