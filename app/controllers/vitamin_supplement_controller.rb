class VitaminSupplementController < ApplicationController
  def index 
    @vitamin_amounts_per_supplement = VitaminAmountPerSupplement.all
    render json: @vitamin_amounts_per_supplement
  end

  def add_vitamin_amount_to_supplement
    @vitamin_amount_per_supplement = VitaminAmountPerSupplement.new(supplement_vitamin_params)
    if @vitamin_amount_per_supplement.save
      render json: @vitamin_amount_per_supplement, status: :created, location: @vitamin_amount_per_supplement
    else
      render json: @vitamin_amount_per_supplement.errors, status: :unprocessable_entity
    end 
  end

  private

    def supplement_vitamin_params
      params.require(:vitamin_amount_per_supplement).permit(:supplement_id, :vitamin_id, :weight, :units)
    end
  end
