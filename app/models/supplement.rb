class Supplement < ApplicationRecord
  belongs_to :brand
  has_and_belongs_to_many :vitamins
  has_many :vitamin_amount_per_supplements, dependent: :destroy
end
