class AddEndTimeAndNotesToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :end_time, :datetime
    add_column :appointments, :notes, :text
  end
end
