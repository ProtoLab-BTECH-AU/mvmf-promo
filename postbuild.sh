pages=("about" "program" "map" "challenge")

for page in "${pages[@]}" ; do
    mkdir "build/$page"
    cp build/index.html "build/$page/"
done