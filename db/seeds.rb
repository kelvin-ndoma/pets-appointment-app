User.create(username: "john_doe", email: "john_doe@example.com", password: "password123")
User.create(username: "jane_doe", email: "jane_doe@example.com", password: "password123")
User.create(username: "bob_smith", email: "bob_smith@example.com", password: "password123")

# Pets
Pet.create(name: "Buddy", breed: "Golden Retriever", medical_history: "None", age: 3, image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_1926.jpg", description: "Friendly and energetic dog", user_id: 1)
Pet.create(name: "Max", breed: "German Shepherd", medical_history: "Vaccinations up-to-date", age: 2, image: "https://images.dog.ceo/breeds/shepherd-german/n02106662_18924.jpg", description: "Loyal and obedient dog", user_id: 2)
Pet.create(name: "Lucy", breed: "Bulldog", medical_history: "Undergoing treatment for skin allergy", age: 4, image: "https://images.dog.ceo/breeds/bulldog-french/20210412_232051.jpg", description: "Calm and affectionate dog", user_id: 3)

Appointment.create(appointment_reason: "Annual checkup", start_time: DateTime.now, end_time: DateTime.now + 1.hour, notes: "No issues found", user_id: 1, pet_id: 1)
Appointment.create(appointment_reason: "Vaccination", start_time: DateTime.now + 1.day, end_time: DateTime.now + 1.day + 30.minutes, notes: "Vaccinations administered successfully", user_id: 2, pet_id: 2)
Appointment.create(appointment_reason: "Skin allergy checkup", start_time: DateTime.now + 2.days, end_time: DateTime.now + 2.days + 1.hour, notes: "Skin allergy persists, changing medication", user_id: 3, pet_id: 3)
Appointment.create(appointment_reason: "Skin allergy checkup", start_time: DateTime.now + 2.days, end_time: DateTime.now + 2.days + 1.hour, notes: "Skin allergy persists, changing medication", user_id: 2, pet_id: 3)
Appointment.create(appointment_reason: "Skin allergy checkup", start_time: DateTime.now + 2.days, end_time: DateTime.now + 2.days + 1.hour, notes: "Skin allergy persists, changing medication", user_id: 3, pet_id: 3)
Appointment.create(appointment_reason: "Skin allergy checkup", start_time: DateTime.now + 2.days, end_time: DateTime.now + 2.days + 1.hour, notes: "Skin allergy persists, changing medication", user_id: 1, pet_id: 3)