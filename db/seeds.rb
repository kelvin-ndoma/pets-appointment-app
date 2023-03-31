# Create some users
user1 = User.create!(username: "johndoe", email: "johndoe@example.com", password: "password")
user2 = User.create!(username: "janedoe", email: "janedoe@example.com", password: "password")

# Create some pets
pet1 = user1.pets.create!(name: "Fluffy", breed: "Persian", medical_history: "None", age: 2, image: "https://www.example.com/fluffy.jpg", description: "A cute and cuddly Persian cat")
pet2 = user2.pets.create!(name: "Rex", breed: "German Shepherd", medical_history: "Allergies", age: 3, image: "https://www.example.com/rex.jpg", description: "A loyal and protective German Shepherd")

# Create appointments for each pet
appointment1 = pet1.appointments.create!(user: user1, appointment_reason: "dental cleaning", start_time: DateTime.now + 1.week)
appointment2 = pet2.appointments.create!(user: user1, appointment_reason: "vaccination", start_time: DateTime.now + 2.weeks)
appointment3 = pet1.appointments.create!(user: user2, appointment_reason: "general checkup", start_time: DateTime.now + 3.weeks)
