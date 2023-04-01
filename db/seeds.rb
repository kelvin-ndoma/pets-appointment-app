# Create some users
user1 = User.create(username: "johndoe", email: "johndoe@example.com", password: "password")
user2 = User.create(username: "janedoe", email: "janedoe@example.com", password: "password")

# Create some pets
pet1 = Pet.create(name: "Fluffy", breed: "Poodle", medical_history: "None", age: 3, image: "https://i.imgur.com/U3ZYNxl.jpg", description: "A cute little dog")
pet2 = Pet.create(name: "Whiskers", breed: "Siamese", medical_history: "Allergic to fish", age: 2, image: "https://i.imgur.com/GhT8ZL1.jpg", description: "A playful cat")

# Create some appointments
appointment1 = Appointment.create(appointment_reason: "Checkup", start_time: Time.now, end_time: Time.now + 1.hour, user_id: user1.id, pet_id: pet1.id, notes: "All good")
appointment2 = Appointment.create(appointment_reason: "Vaccination", start_time: Time.now + 1.day, end_time: Time.now + 1.day + 1.hour, user_id: user2.id, pet_id: pet2.id, notes: "Bring shot records")
