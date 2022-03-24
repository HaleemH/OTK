# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts '🌱 Seeding data...'
User.destroy_all
Vendor.destroy_all
Comment.destroy_all
Task.destroy_all

# test users

User.create(
  username: 'test',
  password_digest: 'test',
  email: 'test@g.com',
  first_name: 'John',
  last_name: 'Doe',
)


# Vendors
Vendor.create(
  name: 'Open Task',
  address: '',
  website: '',
  menu: '',
  services: '',
  phone: '',
  rating: 0,
)
Vendor.create(
  name: 'Prolific Tech',
  address: '123 Crenshaw BLVD, 90250 CA',
  website: 'haleemh.dev',
  menu: '',
  services: 'Web Development',
  phone: '1234567890',
  rating: 0,
)
Vendor.create(
  name: 'test business',
  address: '2223 Crenshaw BLVD, 90250 CA',
  website: 'test.dev',
  menu: '',
  services: 'land scaping',
  phone: '1234567890',
  rating: 0,
)

Vendor.create(
  name: 'WizKid Lemonade',
  address: 'Local pop ups/ BACHIBUS',
  website: '',
  social: "@Wizkid_lemonade",
  menu: 'Lemonade, Strawberry Lemonade, Tropical Lemonade, Green Apple Lemonade, Peach Lemonade, Kiwi Lemonade *TBA*, Watermelon Lemonade *TBA*, Berry Lemonade',
  services: 'Drinks',
  phone: '323.530.8342',
  rating: 0,
  email: 'Icwright@gmail.com',
  img: "https://www.lemontreedwelling.com/wp-content/uploads/2020/05/strawberry-lemonade-featured-720x720.jpg",
)

Vendor.create(
  name: 'A, Danae Johnson',
  address: '',
  website: 'LoveBodyScents.com',
  social:'@LoveBodyScents' ,
  menu: '',
  services: '',
  phone: '',
  rating: 0,
  email: 'customerservice@lovebodyscents.com',
  img: "https://www.ambius.com/blog/wp-content/uploads/2019/05/biophilic-scents.jpg",
)
Vendor.create(
  name: "Bree's Cleaning Service ",
  address: '',
  website: '',
  social:'@breescleaningservice',
  menu: '',
  services: 'Cleaning Service',
  phone: '',
  rating: 0,
  email: 'breescleaningservice01@gmail.com',
  img: "https://socalcleaningpros.com/wp-content/uploads/2020/09/move-in-out-cleaning-services-1.jpg"
)

# Comments


