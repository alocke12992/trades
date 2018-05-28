x = 0
10.times do 
  x += 1 
 user = User.create(
    email: "test#{x}@gmail.com",
    password: 'password',
    image: Faker::Avatar.image,
    nickname: Faker::Internet.user_name
  )
  5.times do
  Item.create(
    name: Faker::App.name,
    description: Faker::Lorem.paragraph,
    user_id: user.id
  )
  end
end

puts "Ten users have been added"
