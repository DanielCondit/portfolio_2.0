function displayCalculations() {
    if ($("#circleForm").validate()) {

        var radius;
        var radiusfp;
        var diameterfp;
        var circumferfp;
        var areafp;

        radius = document.getElementById("radius").value;

        radiusfp = parseFloat(radius);

        // diameterfp = radiusfp * 2.0;
        diameterfp = calcDiameter(radiusfp);
        document.getElementById("diameter").innerHTML = diameterfp.toString();

        // circumferfp = 2.0 * Math.PI * radiusfp;
        circumferfp = calcCircumfer(radiusfp);
        document.getElementById("circumference").innerHTML = circumferfp.toString();

        // areafp = Math.PI * radiusfp**2;
        // areafp = Math.PI * Math.pow(radiusfp, 2);
        areafp = calcArea(radiusfp);
        document.getElementById("area").innerHTML = areafp.toString();

    }
}

function calcDiameter(r) {

    var result;

    result = r * 2;

    return result;

}

function calcCircumfer(r) {

    var result;

    result = 2.0 * Math.PI * r;

    return result;

}

function calcArea(r) {

    var result;

    result = Math.PI * r ** 2;

    return result;

}