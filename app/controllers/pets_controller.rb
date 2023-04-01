class PetsController < ApplicationController
  def index
    pets = Pet.all
    render json: pets
  end


  def index_without_appointments
    pets = Pet.includes(:user).where.not(id: Appointment.pluck(:pet_id)).all
    render json: pets, each_serializer: PetWithoutAppointmentsSerializer
  end
  def show
    pet = Pet.find(params[:id])
    render json: pet
  end
  
  def create
    pet = Pet.new(pet_params)
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
