class PetsController < ApplicationController
    wrap_parameters format: []
    def index
        pets = Pet.all
        render json: pets, status: :ok
    end

    def  pet
        pet = find_pet
        if pet
            render json: pet, status: :ok
        else
            render json: { error: "Pet not found" }, status: :not_found

        end
    end

    def create
        pet = Pet.create!(pet_params)
        render json: pet, status: :created
    end

    def updated
        pet = find_pet
        pet.update(pet_params)
        render json: pet, status: :accepted
    end

    def destroy
        pet = find_pet
        head :no_content
    end

    
    private
    def pet_params
        params.permit(:name, :breed, :image, :medical_history, :age, :description, :user_id)
    end
    def find_pet
        Pet.find_by(id: params[:id])
    end

    
end
