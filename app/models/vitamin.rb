class Vitamin < ApplicationRecord
    has_and_belongs_to_many :supplements
    has_many :vitamin_amount_per_supplements
end
