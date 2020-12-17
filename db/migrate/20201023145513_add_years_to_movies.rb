class AddYearsToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :year, :integer, null: false
    add_index :movies, :year
  end
end
