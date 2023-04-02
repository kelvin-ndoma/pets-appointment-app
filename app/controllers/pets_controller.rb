class PetsController < ApplicationController
  def index
    pets = Pet.all
    render json: pets
  end



  def show
    pet = Pet.find(params[:id])
    render json: pet
  end
  
  def create
    pet = Pet.create(pet_params)
    if pet.save
      render json: pet, status: :created
    else
      render json: pet.errors, status: :unprocessable_entity
    end
  end
  
  def update
    pet = Pet.find(params[:id])
    if pet.update(pet_params)
      render json: pet, status: :ok
    else
      render json: pet.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    pet = Pet.find(params[:id])
    pet.destroy
    head :no_content
  end
  
  private
  
  def pet_params
    params.require(:pet).permit(:name, :breed, :age, :medical_history, :image, :description)
  end
end
# class PetsController < ApplicationController
#   before_action :set_pet, only: [:show, :update, :destroy]
#   before_action :authorize_user, except: [:index, :create]
  
#   def index
#     pets = current_user.pets
#     render json: pets
#   end
  
#   def show
#     render json: @pet
#   end
  
#   def create
#     pet = current_user.pets.build(pet_params)
#     if pet.save
#       render json: pet, status: :created
#     else
#       render json: pet.errors, status: :unprocessable_entity
#     end
#   end
  
#   def update
#     if @pet.update(pet_params)
#       render json: @pet
#     else
#       render json: @pet.errors, status: :unprocessable_entity
#     end
#   end
  
#   def destroy
#     @pet.destroy
#     head :no_content
#   end
  
#   private
  
#   def set_pet
#     @pet = Pet.find_by(id: params[:id])
#     render json: { error: "Pet not found" }, status: :not_found unless @pet
#   end
  
#   def pet_params
#     params.require(:pet).permit(:name, :breed, :age, :medical_history, :image, :description)
#   end
  
#   def authorize_user
#     render json: { errors: ["Not authorized"] }, status: :unauthorized unless @pet.user == current_user
#   end
# end
