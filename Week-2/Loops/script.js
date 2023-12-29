function drawTriangle(triangleSize) {
    for (let index = 0; index < triangleSize; index++) {
        let stars = [];
        for (let starCounter = 0; starCounter <= index; starCounter++) {
            stars.push('*');
        }

        console.log(stars.join(""));
    }
}

drawTriangle(4);