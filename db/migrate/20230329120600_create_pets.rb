class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.string :medical_history
      t.integer :age
      t.string :image
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
