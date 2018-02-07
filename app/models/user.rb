class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many(
    :authored_posts,
    class_name: 'Post',
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :user_to_followee_follows,
    class_name: 'Follow',
    foreign_key: :follower_id,
    primary_key: :id
  )

  has_many :followees, through: :user_to_followee_follows, source: :followee

  has_many(
    :follower_to_user_follows,
    class_name: 'Follow',
    foreign_key: :followee_id,
    primary_key: :id
  )

  has_many :followers, through: :follower_to_user_follows, source: :follower

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
