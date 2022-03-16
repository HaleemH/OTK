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
User.create(
  username: 'test1',
  password_digest: 'test1',
  email: 'test1@g.com',
  first_name: 'Jane',
  last_name: 'Doe',
)

# Vendors

Vendor.create(
  name: 'Prolific Tech',
  address: '123 Crenshaw BLVD, 90250 CA',
  website: 'haleemh.dev',
  menu: '',
  services: 'Web Development',
  phone: '1234567890',
  rating: 0,
)

# Comments


