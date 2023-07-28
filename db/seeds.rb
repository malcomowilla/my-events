require 'json'

puts 'Seeding organizers...'

# Define the number of organizers you want to create
num_organizers = 10

# Loop to create the organizers and store them in the organizers array
organizers = []
num_organizers.times do
  name = Faker::Name.name
  email = Faker::Internet.email
  contact_number = Faker::PhoneNumber.phone_number

  organizers << Organizer.create!(
    name: name,
    email: email,
    contact_number: contact_number
  )
end

puts 'Organizers seeded successfully!'

puts 'Seeding events, venues, and performers...'

# Replace 'YOUR_SEATGEEK_ACCESS_TOKEN' with the actual SeatGeek API access token
access_token = 'MzUyMzU3Njl8MTY5MDU1NTA4OC4zODYzNQ'

# Replace 'YOUR_EVENTBRITE_API_URL' with the actual SeatGeek API URL for events
api_url = "https://api.seatgeek.com/2/events?client_id=#{access_token}"

begin
  # Make the API request for events
  response = RestClient.get(api_url)

  puts "API Response for Events: #{response}" # Add this line for debug

  # Check if the response is not empty and contains valid JSON
  if !response.nil? && response.strip.start_with?('{')
    event_data = JSON.parse(response)

    # Assuming the response contains an array of events under the key 'events'
    events = event_data['events']

    # Loop through the events and create records in the database
    events.each do |event|
      # Find a random organizer from the existing organizers
      organizer = organizers.sample

      # Create the event record in the database and associate it with the organizer
      event_record = Event.create!(
        name: event['name'],
        description: event['description'],
        capacity: event['capacity'],
        date: event['datetime_local'], # Change 'datetime_utc' to 'datetime_local'
        organizer: organizer
      )

      # Check if the event has venues
      if event['venue']
        # Check if the venue exists in the database or create a new one if it doesn't
        venue_name = event['venue']['name_v2']
        venue_address = event['venue']['address']
        venue_city = event['venue']['city']
        venue_state = event['venue']['state']
        venue_country = event['venue']['country']
        venue_url = event['venue']['url']
        venue_postal_code = event['venue']['postal_code'] # Correct the key to 'postal_code'
        venue = Venue.find_or_create_by(name: venue_name, address: venue_address, city: venue_city, state: venue_state, country: venue_country, url: venue_url, postal_code: venue_postal_code)

        # Associate the venue with the event
        event_record.update(venue: venue)
      end

      # Check if the event has performers
      if event['performers']
        # Loop through the performers and create records in the database
        event['performers'].each do |performer_data|
          # Check if the performer exists in the database or create a new one if it doesn't
          performer_name = performer_data['name']
          performer_image = performer_data['image']
          performer = Perfomer.find_or_create_by(name: performer_name, image_url: performer_image)

          # Associate the performer with the event
          event_record.perfomers << performer
        end
      end
    end

    puts 'Events, Venues, and Performers seeded successfully!'
  else
    puts "Invalid JSON response for Events: #{response}"
  end
rescue RestClient::ExceptionWithResponse => e
  puts "Error fetching Events: #{e.response}"
end