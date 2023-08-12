let result = document.getElementById("screen");
var number;
var new_num;


function calculate(number) {
    result.value = result.value + number;
}
function output() {
    try {
        if (new_num == '!') {

            var a = 1;
            let n = result.value;
            m = n.split("!");
            o = m[0];

            for (i = o; i >= 1; i--) {
                a = a * i;

            }
            result.value = a;


        }
        if (new_num == '\u221A') {
            p = result.value.split("\u221A");
            q = p[1];
            result.value = Math.sqrt(q);

        }
        if (new_num == 'rad\u0028') {
            p = result.value.split("rad\u0028");
            q = p[1];
            t = q.split(')');
            u = t[0];
            r = u * (Math.PI / 180);
            result.value = r.toFixed(5);
        }
        if (new_num == 'sin\u0028') {
            p = result.value.split("sin\u0028");
            q = p[1];
            t = q.split(")");
            u = t[0];
            r = u * (Math.PI / 180);
            result.value = Math.sin(r).toFixed(5);
        }
        if (new_num == 'cos\u0028') {
            p = result.value.split("cos\u0028");
            q = p[1];
            t = q.split(")");
            u = t[0];
            r = u * (Math.PI / 180);
            result.value = Math.cos(r).toFixed(5);
        }
        if (new_num == 'tan\u0028') {
            p = result.value.split("tan\u0028");
            q = p[1];
            t = q.split(")");
            u = t[0];
            r = u * (Math.PI / 180);
            result.value = Math.tan(r).toFixed(5);
        }
        if (new_num == 'arcsin\u0028') {
            p = result.value.split("arcsin\u0028");
            q = p[1];
            t = q.split(')');
            u = t[0];
            r = Math.asin(u);
            s = r * (180 / Math.PI);
            result.value = s.toFixed();

        }
        if (new_num == 'arccos\u0028') {
            p = result.value.split("arccos\u0028");
            q = p[1];
            t = q.split(')');
            u = t[0];
            r = Math.acos(u);
            s = r * (180 / Math.PI);
            result.value = s.toFixed();

        }
        if (new_num == 'arctan\u0028') {
            p = result.value.split("arctan\u0028");
            q = p[1];
            t = q.split(')');
            u = t[0];
            r = Math.atan(u);
            s = r * (180 / Math.PI);
            result.value = s.toFixed();

        }
        if (new_num == 'exp\u0028') {
            p = result.value.split("exp\u0028");
            q = p[1];
            t = q.split(')');
            u = t[0];
            r = 2.71828747 ** u;
            result.value = r.toFixed(5);

        }
        if (new_num == '%') {

            let a = result.value;
            b = a.split("/");
            x = b[0];
            y = b[1].split("%");
            z = y[0];
            o = (x / z) * 100;
            result.value = o.toFixed(5);
        }
        result.value = eval(result.value);
    }
    catch (error) {
        alert("invalid input");
    }
}

function square() {

    result.value = Math.pow(result.value, 2);
}
function fact(number) {
    result.value += number;
    new_num = number;
}
function sqrinv() {
    result.value = Math.pow(result.value, -1);
}
function sqrt2(number) {
    new_num = number;
    result.value += number;
}
function sin(number) {
    new_num = number;
    result.value += number;
}
function cos(number) {
    new_num = number;
    result.value += number;
}
function tan(number) {
    new_num = number;
    result.value += number;
}
function rad(number) {
    new_num = number;
    result.value += number;
}
function clr() {
    result.value = "";
}
function del() {
    result.value = result.value.slice(0, -1);
}
function sininv(number) {
    new_num = number;
    result.value += number;

}
function cosinv(number) {
    new_num = number;
    result.value += number;

}
function taninv(number) {
    new_num = number;
    result.value += number;

}
function pi(number) {
    new_num = number;
    result.value += Math.PI.toFixed(4);

}
function expo(number) {
    new_num = number;
    result.value += number;
}
function percentage(number) {
    new_num = number;
    result.value += number;
}
