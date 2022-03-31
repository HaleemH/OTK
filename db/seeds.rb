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

# Vendors

Vendor.create(
  name: 'WizKid Lemonade',
  address: 'Local pop ups/ BACHIBUS',
  website: '',
  social: '@Wizkid_lemonade',
  menu:
    'Lemonade, Strawberry Lemonade, Tropical Lemonade, Green Apple Lemonade, Peach Lemonade, Kiwi Lemonade *TBA*, Watermelon Lemonade *TBA*, Berry Lemonade',
  services: '',
  phone: '323.530.8342',
  rating: 0,
  email: 'Icwright@gmail.com',
  img:
    'https://www.lemontreedwelling.com/wp-content/uploads/2020/05/strawberry-lemonade-featured-720x720.jpg',
)

Vendor.create(
  name: 'Love Body Scents',
  address: '',
  website: 'LoveBodyScents.com',
  social: '@LoveBodyScents',
  menu: '',
  services: 'Providing quality body scents.',
  phone: '',
  rating: 0,
  email: 'customerservice@lovebodyscents.com',
  img:
    'https://www.ambius.com/blog/wp-content/uploads/2019/05/biophilic-scents.jpg',
)
Vendor.create(
  name: "Bree's Cleaning Service ",
  address: '',
  website: '',
  social: '@breescleaningservice',
  menu: '',
  services: 'Cleaning Service',
  phone: '',
  rating: 0,
  email: 'breescleaningservice01@gmail.com',
  img:
    'https://socalcleaningpros.com/wp-content/uploads/2020/09/move-in-out-cleaning-services-1.jpg',
)
Vendor.create(
  name: 'MSI Production LLC',
  address: '',
  website: '',
  social: '@loveiizgod',
  menu: '',
  services: 'Film / Photography',
  phone: '',
  rating: 0,
  email: '',
  img:
    'https://i1.adis.ws/i/canon/eos_m50-lifestyle-mohamed-abdulle-19_02eb9ceca5c541f08cfc21e76ddc143c?$media-collection-half-dt-jpg$',
)

Vendor.create(
  name: 'Shop LB|LA',
  address: '',
  website: 'https://shoplbla.com',
  social: '@shop.lbla',
  menu: '',
  services: "Women's Clothing Store",
  phone: '',
  rating: 0,
  email: '',
  img:
    'https://cdn.shopify.com/s/files/1/0083/8883/7481/files/IMG_2068_100x@2x.png?v=1641704118',
)

Vendor.create(
  name: 'Blaxsons',
  address: '',
  website: 'https://www.blaxsons.com',
  social: '@shopblaxsons_',
  menu: '',
  services: "Online Store",
  phone: '',
  rating: 0,
  email: '',
  img:
    'https://static.wixstatic.com/media/70059b_b6bd4c2e0f2c4529a1dd87f8647a450e~mv2.jpg/v1/fill/w_308,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Gift%20Card%20.jpg',
)

# Comments
