# Create some users
user1 = User.create(username: "user1", email: "user1@example.com", password: "password")
user2 = User.create(username: "user2", email: "user2@example.com", password: "password")
user3 = User.create(username: "user3", email: "user3@example.com", password: "password")
# Create some pets
pet1 = Pet.create(name: "Fluffy", breed: "Poodle", medical_history: "None", age: 3, image: "https://img.freepik.com/free-photo/beautiful-brunette-woman-plays-with-two-shiba-inu-dogs-looks-away-thinks-how-feed-pets-teach-commands-expresses-caress-isolated-pink-background_273609-34195.jpg?w=740&t=st=1680465342~exp=1680465942~hmac=8dd9449f81f54986391d71a78bbc8d41583865fbd309f66b1a4480aacc71f846", description: "A cute little dog")
pet2 = Pet.create(name: "Whiskers", breed: "Siamese", medical_history: "Allergic to fish", age: 2, image: "https://as1.ftcdn.net/v2/jpg/02/76/95/88/1000_F_276958878_urYXlQkplj80cS0Y6Rk7gt2OROlHzjxj.jpg", description: "A playful cat")
pet3 = Pet.create(name: "Whiskers", breed: "Siamese", medical_history: "Allergic to fish", age: 2, image: "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=360&t=st=1680464831~exp=1680465431~hmac=420b6e2c54e7c4bab2443c0f7367aac5f690ea239f0746f4da34a6e1af71d6ca", description: "A playful cat")
pet4 = Pet.create(name: "Whiskers", breed: "Siamese", medical_history: "Allergic to fish", age: 2, image: "https://img.freepik.com/free-photo/selective-focus-shot-adorable-kooikerhondje-dog_181624-37636.jpg?size=626&ext=jpg&uid=R96418730&semt=sph", description: "A athlete dog")
pet5 = Pet.create(name: "Whiskers", breed: "Siamese", medical_history: "Allergic to fish", age: 2, image: "https://img.freepik.com/free-photo/isolated-shot-ginger-cat-looking-retriever-dog-looking-camera-white-surface_181624-43633.jpg?w=740&t=st=1680464912~exp=1680465512~hmac=b44841ebeb3703087d81ecfae7c0c08ec5a48aad1727377afff83f7b71d8d752", description: "a cunning Dog")
pet6 = Pet.create(name: "Whiskers", breed: "Siamese", medical_history: "Allergic to fish", age: 2, image: "https://img.freepik.com/free-psd/scene-with-adorable-brown-white-pet-dog_23-2150179291.jpg?w=360&t=st=1680464943~exp=1680465543~hmac=26f77d08c7d970be29a679fd61cd14448fcd22b2c99605927cdde43aefb70fef", description: "A playful Dog")


# Create some appointments
appointment1 = Appointment.create(appointment_reason: "Checkup", start_time: Time.now, end_time: Time.now + 1.hour, user_id: user1.id, pet_id: pet1.id, notes: "All good")
appointment2 = Appointment.create(appointment_reason: "Cavity", start_time: Time.now + 1.day, end_time: Time.now + 1.day + 1.hour, user_id: user2.id, pet_id: pet3.id, notes: "Bring shot records")
appointment3 = Appointment.create(appointment_reason: "Teeth clining", start_time: Time.now + 1.day, end_time: Time.now + 1.day + 1.hour, user_id: user3.id, pet_id: pet2.id, notes: "Bring previous examinations")
appointment4 = Appointment.create(appointment_reason: "Legs Checkup", start_time: Time.now + 1.day, end_time: Time.now + 1.day + 1.hour, user_id: user1.id, pet_id: pet3.id, notes: "Bring shot records")
appointment5 = Appointment.create(appointment_reason: "Vaccination", start_time: Time.now + 1.day, end_time: Time.now + 1.day + 1.hour, user_id: user2.id, pet_id: pet2.id, notes: "Best record")
appointment6 = Appointment.create(appointment_reason: "General Examination", start_time: Time.now + 1.day, end_time: Time.now + 1.day + 1.hour, user_id: user3.id, pet_id: pet1.id, notes: "Bring shot records")