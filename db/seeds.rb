# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create!(username: 'user1',  email: 'user1@example.com',  password: 'password')
user2 = User.create!(username: 'user2',  email: 'user2@example.com',  password: 'password')
user3 = User.create!(username: 'user3',  email: 'user3@example.com',  password: 'password')

# Create pets for each user
pet1 = user1.pets.create!(name: 'Buddy', breed: 'Golden Retriever', age: 3, image:'./images/doggy.jpg', description: 'Friendly and energetic dog.', medical_history: 'Up-to-date on all vaccinations.')
pet2 = user1.pets.create!(name: 'Luna', breed: 'Siamese', age: 2,image:'./images/pic1.jpg', description: 'Loves to cuddle and play with toys.', medical_history: 'Recently had a check-up at the vet.')
pet3 = user2.pets.create!(name: 'Max', breed: 'German Shepherd', age: 5, image:'./images/doggy2.jpg', description: 'Protective and loyal companion.', medical_history: 'Has a sensitive stomach and requires a special diet.')
pet4 = user2.pets.create!(name: 'Mittens', breed: 'Tabby', age: 1, image:'./images/cat1.jpg', description: 'Playful and curious cat.', medical_history: 'Needs to have teeth cleaned.')
pet5 = user3.pets.create!(name: 'Rocky', breed: 'Boxer', age: 4, image:'./images/chihuahua.jpg', description: 'Energetic and athletic dog.', medical_history: 'Has a history of hip dysplasia.')
pet6 = user3.pets.create!(name: 'Snowball', breed: 'Persian', age: 6, image:'./images/cats2.jpg', description: 'Affectionate and calm cat.', medical_history: 'Has had respiratory infections in the past.')

# Create appointments for each pet
appointment1 = pet1.appointments.create!(user: user1,  appointment_reason: "dental cleaning",  start_time: DateTime.now + 1.week)
appointment2 = pet2.appointments.create!(user: user1, appointment_reason: "vaccination", start_time: DateTime.now + 2.weeks)
appointment3 = pet3.appointments.create!(user: user3, appointment_reason: "general checkup", start_time: DateTime.now + 3.weeks)
appointment4 = pet4.appointments.create!(user: user2, appointment_reason: "examination", start_time: DateTime.now + 4.weeks)
appointment5 = pet5.appointments.create!(user: user3, appointment_reason: "tests", start_time: DateTime.now + 5.weeks)