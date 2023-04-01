class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :appointment_reason
      t.datetime :start_time
      t.integer :user_id
      t.integer :pet_id
      t.timestamps
    end
  end
end
