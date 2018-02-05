json.extract! post,
              :id,
              :post_type,
              :title,
              :body,
              :source,
              :author_id
json.author post.author.username
