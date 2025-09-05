function change(img) {
    img.src =
        "images/" +
        (img.src.include("image5.png") ? "image4.png" : "image5.png");
}
