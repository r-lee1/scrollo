# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_list = [
  ["guest", "guest@email.com", "password"],
  ["bob", "bob@email.com", "password"],
  ["batman", "batman@email.com", "password"],
  ["superman", "superman@email.com", "password"],
  ["wonderwoman", "ww@email.com", "password"],
  ["jengole", "jengole@email.com", "password"],
  ["baobao", "baobao@email.com", "password"],
  ["worldtravler", "wt@email.com", "password"]
]


User.create(username: "bob", email: "bob@email.com", password: "password")
User.create(username: "spidey", email: "spidey@email.com", password: "password")
User.create(username: "batman", email: "batman@email.com", password: "password")
User.create(username: "baobao", email: "baobao@email.com", password: "password")
User.create(username: "jengole", email: "jengole@email.com", password: "password")
User.create(username: "guest", email: "guest@email.com", password: "password")

Post.create(post_type: "photo", body: "Dream vacation", source: "http://res.cloudinary.com/dxyit2phe/image/upload/v1517798500/mjzgbjgfybkwfwexwxng.jpg", author_id: 2)
Post.create(post_type: "photo", body: "Switzerland", source: "http://res.cloudinary.com/dxyit2phe/image/upload/v1517793003/raphael-biscaldi-344000_c9gvym.jpg", author_id: 2)
Post.create(post_type: "text", title: "1914 translation by H. Rackham", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", author_id: 1)
Post.create(post_type: "photo", body: "Spiaggia delle Cannelle, Italy", source: "http://res.cloudinary.com/dxyit2phe/image/upload/v1517616576/luca-baggio-211858_qkqeqq.jpg", author_id: 5)
Post.create(post_type: "photo", body: "Bangkok, Thailand", source: "http://res.cloudinary.com/dxyit2phe/image/upload/v1517616562/sam-beasley-500154_ujwwt2.jpg", author_id: 1)
Post.create(post_type: "photo", body: "Serenity", source: "http://res.cloudinary.com/dxyit2phe/image/upload/v1517798120/baroyv0m1tsuftdbrc3p.jpg", author_id: 4)
Post.create(post_type: "photo", body: "Chillin'", source: "http://res.cloudinary.com/dxyit2phe/image/upload/v1517962105/vp0cqevldggpec7mx958.jpg", author_id: 4)
