class AppointmentsController < ApplicationController
  def index
    appointments = current_user.appointments
    render json: appointments, status: :ok
  end
  
  def show
    appointment = current_user.appointments.find_by(id: params[:id])
    if appointment
      render json: appointment, status: :ok
    else
      render json: { error: "No appointment found" }, status: :not_found
    end
  end

  def create
    appointment = current_user.appointments.build(appointment_params)
    if appointment.save
      render json: appointment, status: :created
    else
      render json: { error: "Failed to create appointment" }, status: :unprocessable_entity
    end
  end

  def update
    appointment = current_user.appointments.find_by(id: params[:id])
    if appointment
      if appointment.update(appointment_params)
        render json: appointment, status: :ok
      else
        render json: { error: "Failed to update appointment" }, status: :unprocessable_entity
      end
    else
      render json: { error: "No appointment found" }, status: :not_found
    end
  end

  def destroy
    appointment = current_user.appointments.find_by(id: params[:id])
    if appointment
      appointment.destroy
      head :no_content
    else
      render json: { error: "No appointment found" }, status: :not_found
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:appointment_reason, :notes, :start_time, :end_time)
  end
end
