require 'json'

User.create(username:"Joseph",email:"joseph@email.com",password:"1111111")

puts 'Seeding organizers...'
events_title = ["Mountain Bike","Beach Gym", "Street photography", "Rock Gym", "Running Up", "Burn Yourself", "Let's Shovel!", "Kayaking on Rivers", "Net Skywalker!", "Skydive Crazy",
                "Surf on Blue", "Camp Fish", "Grass Skiing", "Camp under Galaxy", "Skateboard, be cool!", "Central Skating", "Sketch", "Burn Fat!!", "Luke Skydiver!", "Family Skating", 
                "Just Golf", "Shadow", "Slide BMX", "Power!", "Kid Football", "Free Discussion", "Track Training", "Beach Running", "Desert Skydive", "Opera! Opera!"]

place_names = ["Boston", "New York", "Los Angeles", "San Francisco", "Washington D.C.", "Waltham", "Orlando", "Atlanta", "Philadelphia", "Chicago", "Houston", "Miami",
                "Seattle", "Austin", "Denver", "Detroit", "San Diego", "Portland", "Phoenix", "New Orleans", "Dallas", "Nashville"]

Golf = "Social is not our purpose, we just want to play golf, just golf. Have a peaceful and satisfied afternoon. So let's see you in the field. "

Opera = "Julius Caesar arrives to conquer Egypt—or will Cleopatra conquer him? Intrigue and passion abound in Handel’s greatest opera, which traces the epic political struggle and the transcendent love story that ignited an empire and anointed a queen. Don’t miss the opportunity to see this Baroque gem in a fully-realized, grand-scale installation that only Boston Lyric Opera can create."

BMX = "Get out there and have some fun. Meet new people, visit new places, take some pics for your instagram, pull new tricks, become a better person and maybe win something along the way. Lots has changed or is changing so double check and keep us posted. It's a crazy world we live in at the moment."

Football = "We want to build a youth football team, every kid has their own way to express the energy. Playing foot is definitely a good option for children. Come and join us, we have professional coaches and scientific training plan."

Discussion = "Do you want to talk? Talk to us. We are poeple to love discuss everything interesting in the world. We are good listener and also a good talker. Come and shrare your wisdom or your fool stories. We accept all!"

Surf = "Everyone can agree that everything related to surf is pretty cool. So are surf competitions. They’re fun to watch, they connect us to our surfing inspirations and it’s pretty nice to see people killing it at what they do best. But if you’re new to the world of surfing, understanding how the competition world works can be quite confusing. That is why I want to break it down for you."                

Camp = "At least once a week, the entire Treetops community takes part in a special event or activity —  laughing, playing, and celebrating together the spirit of Camp. Throughout the summer, campers, counselors, and staff alike look forward to these community-wide events."

Sketch = "Whether you plan to enter plein air events or not, the exercise of painting outdoors will almost certainly help you improve your paintings. So get yourself out there!"

Grasskii = "We started with a passion for snow skiing... but it sucks to stop in the summer. Join us for summer skiing!"

IceRink = "A great place to bring your family. It is Family oriented during public skating times. So get your family here and have a wonderful afternoon"

Skate = "One of the best skate contests in the world featuring a multi-part course, with team and individual competitions, as well as a sponsor village and outdoor music festival in the concert area, local food and drink vendors and public skate park."

MountainBike = "Wherever you live in the U.S., chances are good that there’s a mountain bike race near you. And if not, there’s no better excuse for a road trip than a race weekend, where you can expand your technical skills in unfamiliar terrain, challenge your fitness, and make new friends.
From leg-breaking climbs to ripping descents, mountain biking has it all. Whether you’re new to riding or an experienced veteran, there’s almost certainly a race out there for you. Here are several awesome mountain bike races to check out in 2020."

Gym = "We are an all-inclusive fitness health and wellness transformation center focusing on personal services to help clients reach their health and fitness goals. We offer several programs to accommodate various lifestyles; there’s something for everyone at every stage of their lives."

StreetPhotography = "“Seeing Beyond the Grey” and “Design Reflections” are two photo walk events that pull you in right away. Accompanied by Abbi Kemp and a colleague, the participants experience the event city through the eyes of accomplished Street Photographers. Bring a fully charged camera, good walking shoes and some spare batteries so you won’t miss any of those special moments."

Run = "Get ready to jump, climb, crawl, slide, run and laugh your way through this 5k! We have put together a variety of FUN obstacles including inflatables, color bombs, mazes, tire runs, potato sack races and more to keep you smiling the whole way through. Time is on your side with this event since it will not be officially timed but we will have a volunteer available at the finish line if you would like to check to see how you did. All ages are welcome to participate so bring a friend, significant other or the whole family to support a good cause!"

Shovel = "Do not shovel after eating or while smoking   Take it slow and stretch out before you begin   Shovel only fresh, powdery snow; it's lighter   Push the snow rather than lifting it   If you do lift it, use a small shovel or only partially fill the shovel" 

Kayaking = "There are few better ways to spend a couple hours or a full day for that matter, than in a kayak moving over water. Think portable fun with which you can explore a favorite or soon to be favorite spot. An experienced Instructor will share information about kayaking and recreational kayaks. You will leave knowing which type of kayak, paddle and PFD will best fit your needs, as well as, the skinny on local paddling destinations. Note: This course does not replace the need for on-water instruction."

Skydive = "Skydive is known for a fun and friendly atmosphere and our passion for the sport. We employ state-of-the-art training methods and use only the latest technology in skydiving equipment. We boast an excellent safety record, and all of our instructors are licensed through the United States Parachute Association (USPA). Each of our instructors has completed an intense training program to ensure the best possible methods of instruction."

NetWalk = "It is known for a fun and friendly atmosphere and our passion for the sport. We employ state-of-the-art training methods and use only the latest technology in walking equipment. We boast an excellent safety record, and all of our instructors are licensed. Each of our instructors has completed an intense training program to ensure the best possible methods of instruction."

description_list = [MountainBike, Gym, StreetPhotography, Gym, Run, Gym, Shovel, Kayaking, NetWalk, Skydive,
                    Surf, Camp, Grasskii, Camp, Skate, IceRink, Sketch, Gym, Skydive, IceRink,
                    Golf, Opera, BMX, Gym, Football, Discussion, Run, Run, Skydive, Opera]

url_for_events = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklEmuzslxdlieZ96gxvp0KH4DNSmrfvNtWd9wsuetu5yWq0wrLzBl9XxNQxAX9XoevX4&usqp=CAU",
  "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUYoCT8ccljHo2qaPidUJBJ4yaeGuDxhJaQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NNVJmfrhf09RXC7tUk8FydsqFv6crlt04A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKweUn1N6qrw-QOhguCCvOzN7HId0yKNeKHQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89AIQYhZpLBhII6i2cabuQUe12noW8lniog&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldfvS7nwVs0Y9SpY-kC0jNCbnfOK2cBZj-g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtdunMylQf3P1WeZQLPzEnnd7O37iSGb-dg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrH6UmvKbkjxQhHqut5ZHvdl7C4gf1ILW4VQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIglK7Ga4AXiah5WNbXeKxv_75ywlxJwpBdg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ANpWwQUMzx94MRNa_xVnSmONUx43JGscVQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWPgizyEK-GIQczBzQW61bj7TKcv3EoNggg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNblOL2_4FYVlxzxUNW34Xhl13E_wsLU7S_cdXgutgidjeVMTCqLHSUFUe6zptnc1MIc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1m8GWrcJJsu4yUYtvXYnCU_Iq8vsrpGW0Hw8DrvOCBCe5zwK9d-DYMSs3KU0RlY097gg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ANpWwQUMzx94MRNa_xVnSmONUx43JGscVQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuB9lfT53clRBjgy45x95UTb8a_hkBsVBV-w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDzV9VgaLkjYBFwd548DTOMrspB0Mk4MFww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EdjHrcXroQAdsodpbmR6nHf-n_FfT9bOfg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7yRndGl0WgsVi4hCobynXkN4iWWMjUA4izeX_eLlm0h-6v4J0AqjUhK5bpBhcIkrm1g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRabxv__fo7witiQQo8n9SOK0szAxoIPyOvA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKj3Qk83D8yCZhre4QtFv_970yRMgeZ77eg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjq31FSBPPaeVshQkhQAdC-rkN44FwKP7pQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TDCZ72SFmsdoKvfz9RJfBahZbY8zXjBNUw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aY91_mpknOI4ucB3Kapqj2l8MnnFckQ0fQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkgNkeZSq7Yb7vFkIVZZuqLE3Nj2qkjuUdF68NFR0opF-bGrb-PO3casooD5KA5-ORqw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CaHiaWXHxN-FyM1-p2bwgrd5h4GHV9Gb1g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pChE5UnrKNdsIfMju1Ug3Xa19NMoydq4tg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLo4uoPJ80RW0iH4AW-lWCYCp2QouadC7lfqcHhWYEYlaygXQmJ1Qf1PZkmJEeV8MTZIo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAU2ulDL3f1OROrL3dNuR3M3gY4Ku6ww_2A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nvBqETT9L4UxZBTzrm3IxFo_Pg3_ijxGjA&usqp=CAU"
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


    ticket_type_data = ["general-admission", "VIP", "family pass", "early-bird", "premium-seating", "backstage-pass", "gold-ticket"] 
ticket_images = [
  "https://shorturl.at/yzH46",
  "https://shorturl.at/cemY6",
  "https://shorturl.at/ekqsV",
  "https://shorturl.at/txCL7",
  "https://shorturl.at/lAKNQ",
  "https://shorturl.at/fjwJX",
  "https://shorturl.at/ayPW1",
  "https://shorturl.at/jpzCS",
  "https://shorturl.at/ux028",
  "https://shorturl.at/bHM59",
  "https://shorturl.at/ouJX8"
]

# Define the number of organizers and events you want to create
num_organizers = 10
num_events_per_organizer = 10
total_events = num_organizers * num_events_per_organizer

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
    image: images_for_event_organizers.sample,
    password: "1234"
  )

  organizers << organizer
end

puts 'Organizers seeded successfully!'

# Loop to create events for each organizer in the array
organizers.each do |organizer|
  num_events_per_organizer.times do
    event_data = {
      name: events_title.sample,
      image_url: url_for_events.sample,
      description: description_list.sample,
      location: place_names.sample,
      organizer: organizer,
      capacity: Faker::Number.between(from: 50, to: 1000),
      date: Faker::Time.forward(days: 30)
    }

    event = Event.create!(event_data)

    # Create a random number of tickets for each event
    
 num_tickets_per_event = rand(50..200)
 num_tickets_per_event.times do
  #user = nil # Set user to nil for no user association
  ticket_type = ticket_type_data.sample
  price_range = {
    "general-admission" => { min: 50, max: 100 },
    "VIP" => { min: 150, max: 300 },
    "family pass" => { min: 500, max: 1000 },
    "early-bird" => { min: 120, max: 250 },
    "premium-seating" => { min: 200, max: 400 },
    "backstage-pass" => { min: 300, max: 600 },
    "gold-ticket" => { min: 400, max: 800 }
  }
  min_price = price_range[ticket_type][:min]
  max_price = price_range[ticket_type][:max]
  price = Faker::Number.between(from: min_price, to: max_price)

  ticket_data = {
    ticket_type: ticket_type,
    image: ticket_images.sample,
    price: price,
    purchased_date: Faker::Date.between(from: Date.today, to: Date.today + 30.days),
    #user: user, # Set user to nil
    event: event
  }
  puts "Creating ticket with data: #{ticket_data}"  # Add this line for debugging

  Ticket.create!(ticket_data)
end
  end
end


puts 'Events and Tickets seeded successfully!'
#     # Define the number of organizers you want to create
# num_organizers = 10

# # Create an array to store the organizers
# organizers = []

# # Loop to create the organizers and store them in the organizers array
# num_organizers.times do
#   name = Faker::Name.name
#   email = Faker::Internet.email
#   contact_number = Faker::PhoneNumber.phone_number

#   organizer = Organizer.create!(
#     name: name,
#     email: email,
#     contact_number: contact_number,
#     image: images_for_event_organizers.sample
    
#   )

#   organizers << organizer
# end

# puts 'Organizers seeded successfully!'

# # Now, let's create events for the first organizer in the array
# organizers.each do |organizer|
#   5.times do
#     event_data = {
        
#       name: events_title[i%30]
#       image_url: url_for_events.sample,
#       description: description_list[i%30]
#       location: place_names[i%22]
#       organizer: organizer,
#        capacity: Faker::Number.between(from: 50, to: 1000), # Example range: 50 to 1000
#               date: Faker::Time.forward(days: 30) # Example: Generate a date in the next 30 days
#     }

#  event = Event.create!(event_data)

#     user = User.all.sample

# ticket_data = {
#  Faker::Date.between(from: Date.today, to: Date.today + 30.days),image:
# price:Faker::Number.decimal(l_digits: 3, r_digits: 2),
# purchased_date: Faker::Date.between(from: Date.today, to: Date.today + 30.days),
# user_id: user
# event_id:event
# image:ticket_images  
# }
# Ticket.create!(ticket_da)
#   end
# end


# puts 'Events seeded successfully!'