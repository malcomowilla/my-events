require 'json'

puts 'Seeding organizers...'


url_for_events = ["https://shorturl.at/fpDJ8",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUYoCT8ccljHo2qaPidUJBJ4yaeGuDxhJaQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NNVJmfrhf09RXC7tUk8FydsqFv6crlt04A&usqp=CAU",
    "https://shorturl.at/borv2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKweUn1N6qrw-QOhguCCvOzN7HId0yKNeKHQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89AIQYhZpLBhII6i2cabuQUe12noW8lniog&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldfvS7nwVs0Y9SpY-kC0jNCbnfOK2cBZj-g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtdunMylQf3P1WeZQLPzEnnd7O37iSGb-dg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrH6UmvKbkjxQhHqut5ZHvdl7C4gf1ILW4VQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIglK7Ga4AXiah5WNbXeKxv_75ywlxJwpBdg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ANpWwQUMzx94MRNa_xVnSmONUx43JGscVQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWPgizyEK-GIQczBzQW61bj7TKcv3EoNggg&usqp=CAU",
    "https://shorturl.at/dtKS9",
    "https://shorturl.at/isyNV",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ANpWwQUMzx94MRNa_xVnSmONUx43JGscVQ&usqp=CAU",
    "https://shorturl.at/yBRY4",
    "https://shorturl.at/cswzC",
    "https://shorturl.at/gqrGS",
    "https://shorturl.at/ktJV8",
    "https://shorturl.at/quyY8",
    "https://shorturl.at/GOY06",
    "https://shorturl.at/nvEX5",
    "https://shorturl.at/bqrZ3",
    "https://shorturl.at/yBMY4",
    "https://shorturl.at/CGPTU",
        "https://shorturl.at/jpLXY",
        "https://shorturl.at/gnzH5",
        "https://shorturl.at/ers58",
        "https://shorturl.at/alyEU",
        "https://shorturl.at/etxFM"
    ]

    
    images_for_event_organizers = [
      "https://shorturl.at/arsNQ",
      "https://shorturl.at/fsxX8",
      "https://shorturl.at/afDW1",
      "https://shorturl.at/uKLNO",
      "https://shorturl.at/cwX69",
      "https://shorturl.at/czJY7",
      "https://shorturl.at/rCZ79"
    ] 
    # Define the number of organizers you want to create
num_organizers = 10

# Create an array to store the organizers
organizers = []

# Loop to create the organizers and store them in the organizers array
num_organizers.times do
  name = Faker::Name.name
  email = Faker::Internet.email
  contact_number = Faker::PhoneNumber.phone_number

  organizer = Organizer.create!(
    name: name,
    email: email,
    contact_number: contact_number,
    image: images_for_event_organizers.sample
    
  )

  organizers << organizer
end

puts 'Organizers seeded successfully!'

# Now, let's create events for the first organizer in the array
organizers.each do |organizer|
  5.times do
    event_data = {
        
      name: Faker::Lorem.sentence,
      image_url: url_for_events.sample,
      description: Faker::Lorem.paragraph,
      location: Faker::Address.full_address,
      organizer: organizer,
       capacity: Faker::Number.between(from: 50, to: 1000), # Example range: 50 to 1000
              date: Faker::Time.forward(days: 30) # Example: Generate a date in the next 30 days
    }

    Event.create!(event_data)
  end
end

puts 'Events seeded successfully!'





