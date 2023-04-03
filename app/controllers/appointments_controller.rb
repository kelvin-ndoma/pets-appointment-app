class AppointmentsController < ApplicationController
  def index
    appointments = Appointment.all
    render json: appointments
  end
  
  def show
    appointment = Appointment.find(params[:id])
    render json: appointment
  end

  def create
    blog = Appointment.create(appointment_params)
    render json: blog, status: :created
  end
  
  def update
    appointment = Appointment.find(params[:id])
    if appointment.update(appointment_params)
      render json: appointment, status: :ok
    else
      render json: appointment.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    appointment = Appointment.find(params[:id])
    appointment.destroy
    head :no_content
  end
  
  private
  
  def appointment_params
    params.permit(:appointment_reason, :notes, :start_time, :end_time, :pet_id, :user_id)
  end
  
end

