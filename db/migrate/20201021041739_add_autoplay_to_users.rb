class AddAutoplayToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :autoplay, :boolean, default: true
  end
end
