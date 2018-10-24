document.addEventListener("DOMContentLoaded", function (event) {

    // создаём "оболочку" вокруг canvas элемента (id="c")
    let canvas = new fabric.Canvas('c', {
        backgroundColor: 'rgb(100,100,200)',
        selectionColor: 'rgba(0, 8, 255, 0.5)',
        selectionLineWidth: 2
    });

// создаём прямоугольник
    let rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20,
        angle: 45
    });

// добавляем прямоугольник, чтобы он отобразился
    canvas.add(rect);
    rect.set('fill', 'red');
    rect.set({ strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
    rect.set('angle', 10).set('flipY', true);

});
