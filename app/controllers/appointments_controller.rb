class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments, status: :ok
    end
    def  show
        appointment = Appointment.find_by(id: params[:id])
        if pet
            render json: appointment.pet, status: :ok
        else
            render json: { error: "No Appointment at the moment" }, status: :not_found

        end
    end
end
