class User < ApplicationRecord
    
has_secure_password
validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
validates :username, uniqueness: {case_sensitive: false}
has_many :tickets

end
