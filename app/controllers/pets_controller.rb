class PetsController < ApplicationController
  before_action :authorize, except: [:index, :show]

  def index
    @pets = Pet.includes(:appointments)
    render json: @pets.as_json(
      include: { appointments: { except: [:id, :created_at, :updated_at] } },
      except: [:created_at, :updated_at]
    )
  end
  
  def show
    pet = find_pet
    if pet
      appointments = pet.appointments.where(user: current_user) if current_user
      render json: { pet: pet, appointments: appointments }, status: :ok
    else
      render json: { error: "Pet not found" }, status: :not_found
    end
  end
  

  def create
    pet = current_user.pets.create(pet_params)
    if pet.persisted?
      render json: pet, status: :created
    else
      render json: { errors: pet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    pet = find_pet
    if pet && pet.user == current_user
      pet.update(pet_params)
      render json: pet, status: :accepted
    else
      render json: { error: "Pet not found or unauthorized" }, status: :not_found
    end
  end

  def destroy
    pet = find_pet
    if pet && pet.user == current_user
      pet.destroy
      head :no_content
    else
      render json: { error: "Pet not found or unauthorized" }, status: :not_found
    end
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :breed, :image, :medical_history, :age, :description)
  end

  def find_pet
    Pet.find_by(id: params[:id])
  end
end
