class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description
      t.string :rating, null: false
      t.string :director, null: false
      t.string :video_url, null: false 

      t.timestamps
    end
    add_index :movies, :title
    add_index :movies, :rating
    add_index :movies, :director
  end
end
