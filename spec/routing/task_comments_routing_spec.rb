require "rails_helper"

RSpec.describe TaskCommentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/task_comments").to route_to("task_comments#index")
    end

    it "routes to #show" do
      expect(get: "/task_comments/1").to route_to("task_comments#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/task_comments").to route_to("task_comments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/task_comments/1").to route_to("task_comments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/task_comments/1").to route_to("task_comments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/task_comments/1").to route_to("task_comments#destroy", id: "1")
    end
  end
end
