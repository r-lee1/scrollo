json.array! @posts do |post|
  json.partial! 'api/posts/post', post: post
end
