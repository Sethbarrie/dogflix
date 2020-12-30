class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    # create_table :favorites do |t|
    #     t.belongs_to :user, null: false
    #     t.belongs_to :movie, null: false
    #     t.timestamps 
    # end

    create_join_table :users, :movies
  end
end
