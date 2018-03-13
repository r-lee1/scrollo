# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Follow.destroy_all
Like.destroy_all

user_list = [
  ["guest", "guest@email.com", "password"],
  ["bob", "bob@email.com", "password"],
  ["batman", "batman@email.com", "password"],
  ["superman", "superman@email.com", "password"],
  ["wonderwoman", "ww@email.com", "password"],
  ["jengole", "jengole@email.com", "password"],
  ["baobao", "baobao@email.com", "password"],
  ["worldtravler", "wt@email.com", "password"],
  ["pixelationary", "pixel@email.com", "password"],
  ["ifoodie", "foodie@email.com", "password"],
  ["sunsetlover", "sunsetlover@email.com", "password"],
  ["GeekTroop", "geek@email.com", "password"],
  ["WorldOfColors", "colors@email.com", "password"],
  ["AnimationNation", "animation@email.com", "password"]
]

user_list.each do |user|
  User.create(username: user[0], email: user[1], password: user[2])
end

Post.create(post_type: "photo", body: "Dream vacation", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517798500/mjzgbjgfybkwfwexwxng.jpg", author_id: 2)
Post.create(post_type: "photo", body: "Switzerland", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517793003/raphael-biscaldi-344000_c9gvym.jpg", author_id: 8)
Post.create(post_type: "photo", body: "classic", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520909057/giphy_ed7ogg.gif", author_id: 14)
Post.create(post_type: "text", title: "1914 translation by H. Rackham", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", author_id: 2)
Post.create(post_type: "photo", body: "Serenity", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517798120/baroyv0m1tsuftdbrc3p.jpg", author_id: 5)
Post.create(post_type: "photo", body: "Fall Colors", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520908371/giphy_xenjj1.gif", author_id: 9)
Post.create(post_type: "photo", body: "Chillin'", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517962105/vp0cqevldggpec7mx958.jpg", author_id: 7)
Post.create(post_type: "video", body: "Toy Story 3 Trailer", source: "https://res.cloudinary.com/dxyit2phe/video/upload/v1518126859/txrqcajrcqvi7gzfjfvz.mp4", author_id: 6)
Post.create(post_type: "photo", body: "Adventure through the galaxy", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1518129007/sxx73qzzixjq8qo5eiln.gif", author_id: 9)
Post.create(post_type: "link", source: "https://www.lipsum.com/", body: "lorum ipsum", author_id: 2)
Post.create(post_type: "photo", body: "Sweet Morning", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1518203557/heather-schwartz-493953_b2s7id.jpg", author_id: 10)
Post.create(post_type: "audio", body: "Jammin'~", source: "https://res.cloudinary.com/dxyit2phe/video/upload/v1518128762/foxnpdcessayw9b0j2nq.mp3", author_id: 6)
Post.create(post_type: "photo", body: "#homemade", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1518203529/brooke-lark-176364_ftw70z.jpg", author_id: 10)
Post.create(post_type: "photo", body: "Moana!!", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520909654/giphy_hmjkl8.gif", author_id: 14)
Post.create(post_type: "photo", body: "Fishermen", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520910211/the-fishermen-2983615_1920_gkapvh.jpg", author_id: 11)
Post.create(post_type: "photo", body: "I'm superman", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1518202470/grant-ritchie-530779_quukly.jpg", author_id: 4)
Post.create(post_type: "photo", body: "Bangkok, Thailand", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517616562/sam-beasley-500154_ujwwt2.jpg", author_id: 8)
Post.create(post_type: "quote", body: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", source:"Helen Keller", author_id: 2)
Post.create(post_type: "photo", body: "Studio Ghibli", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520909217/giphy_b1qzak.gif", author_id: 14)
Post.create(post_type: "quote", body: "I am a leaf on the wind, watch how I soar.", source:"Wash, Serenity", author_id: 12)
Post.create(post_type: "photo", body: "New Year's Eve", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520910080/new-years-eve-1953253_1280_rk5dor.jpg", author_id: 13)
Post.create(post_type: "link", source: "https://www.geek.com/games/mario-replaces-the-google-maps-arrow-for-national-mario-day-1733352/", body: "Mario Replaces the Google Maps Arrow for National Mario Day", author_id: 12)
Post.create(post_type: "photo", body: "City at dusk", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517953501/g031k1teqbstdbbzllyh.jpg", author_id: 3)
Post.create(post_type: "photo", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1520910064/fruit-3048001_1920_co8r4c.jpg", author_id: 13)
Post.create(post_type: "photo", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1518126121/ziurvssmwvl3kddj2vbm.gif", author_id: 7)
Post.create(post_type: "photo", body: "Spiaggia delle Cannelle, Italy", source: "https://res.cloudinary.com/dxyit2phe/image/upload/v1517616576/luca-baggio-211858_qkqeqq.jpg", author_id: 8)


follow_list = [
  [1, 2],
  [1, 8],
  [1, 10],
  [1, 7]
]

follow_list.each do |follow|
  Follow.create(follower_id: follow[0], followee_id: follow[1])
end

like_list = [
  [1, 5],
  [2, 5],
  [3, 6],
  [4, 13],
  [5, 13]
]

like_list.each do |like|
  Like.create(user_id: like[0], post_id: like[1])
end
