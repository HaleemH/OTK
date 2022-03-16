class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :website, :social, :menu, :services, :phone, :rating
end
