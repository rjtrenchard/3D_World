#!/bin/zsh

# Directory containing the files
input_dir="res/galaxy"
output_dir="res/galaxy"

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through each file in the directory
for file in "$input_dir"/*.tga; do
  # Ensure it's a file (not a directory)
  if [[ -f "$file" ]]; then
    # Get the filename without the directory path
    filename=$(basename "$file")
    
    # Run ImageMagick command (example: convert to grayscale)
    magick convert "$file" "$output_dir/$filename:r.png"

    echo "Processed $file -> $output_dir/$filename"
  fi
done
