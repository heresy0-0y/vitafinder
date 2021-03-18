class VitaminAmountPerSupplement < ApplicationRecord
  belongs_to :supplement
  belongs_to :vitamin
end
