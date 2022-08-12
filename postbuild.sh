pages=("about" "program" "map" "challenge" "challenge1" "challenge2" "challenge3")

for page in "${pages[@]}" ; do
    mkdir "build/$page"
    cp build/index.html "build/$page/"
done