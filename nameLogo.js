function NameLogo(image, options) {
    let _this = this,
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),
    defaultOptions = {
        name: "Name Logo",
        size: 125,
        color: "#f00",
        fill: "#ff0"
    }

    options = {
        ...defaultOptions,
        ...options
    }

    canvas.width = options.size;
    canvas.height = options.size;

    let centerX = canvas.width / 2,
    centerY = canvas.height / 2;

    if (options.name !== "") {
        let splittedName = options.name.split(" "),
        firstLetter = splittedName.map(word => word.charAt(0)).join("").toUpperCase();

        context.fillStyle = options.fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = `${options.size / 2}px Arial`;
        context.fillStyle = options.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(firstLetter, centerX, centerY);
    }

    image = document.querySelector(image);

    image.src = canvas.toDataURL();

    let a = document.createElement("a");

    a.setAttribute("download", "Name Logo.png");
    a.setAttribute("href", `${canvas.toDataURL()}`);
    document.body.appendChild(a);

    a.click();
    a.remove();
}