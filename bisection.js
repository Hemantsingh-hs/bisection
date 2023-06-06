console.log("Welcome to bisection method !!");

const chunu1 = document.querySelector('#chunu1');
// const fromBhaiya=document.getElementsByName('type')[0];
const algebra = document.querySelector('#algebra');
const trans = document.querySelector('.trans')
const option = document.querySelector('option')
let eq = document.getElementById('equation');
console.log(chunu1);
console.log(eq[0]);



let footer=document.getElementById('footer');
eq.addEventListener("change", function () {

    // footer.style.position='flex';
    if (eq.value == "Algebric") {
        algebricFun();
    }
    if (eq.value == "Transcendental") {

        transFun();

    }
    if (eq.value == "select") {
        select();

    }
    // if(eq.value=="select" ){}
    // eq.preventDefault();
});

function algebricFun() {

    if (trans.style.display == 'block') {
        trans.style.display = 'none';

    }
    if (algebra.style.display = 'none') {
        algebra.style.display = 'block';
        // footer.style.position='flex';
    }


}
function transFun() {

    if (algebra.style.display == 'block') {
        algebra.style.display = 'none';

    }
    if (trans.style.display = 'none') {
        trans.style.display = 'block';
    }


}
function select() {
    trans.style.display = 'none';
    algebra.style.display = 'none';
}

//element in algebric equation
let a = document.getElementById('a');

let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let iterations = document.getElementById('iterations');

let intervalA = document.getElementById('intervalA');
let intervalB = document.getElementById('intervalB');
let input = document.querySelectorAll('input');
let inputTag = document.querySelector('.inputTag')



a.addEventListener('change', function (e) {
    A1 = Number(e.target.value);
    console.log('numberA', A1)

});
b.addEventListener('change', function (e) {
    B1 = Number(e.target.value);
    console.log('numberB', B1)

});
c.addEventListener('change', function (e) {
    C1 = Number(e.target.value);
    console.log('numberC', C1)

});
d.addEventListener('change', function (e) {
    D1 = Number(e.target.value);
    console.log('numberD', D1)

});
iterations.addEventListener('change', function (e) {
    I1 = Number(e.target.value);
    console.log('numberI', I1)

});
intervalA.addEventListener('change', function (e) {
    IA = Number(e.target.value);
    console.log('numberIA', IA)

});
intervalB.addEventListener('change', function (e) {
    IB = Number(e.target.value);
    console.log('numberIB', IB)

});



// JavaScript program for implementation
// of Bisection Method for
// solving equations
result1 = document.getElementById('result');
console.log('result!', result1);
result.addEventListener('click', function () {

    let x = [];
    let p1 = [];
    let p2 = [];
    let iR = [];
    let EPSILON = 0.01;

    // An example function whose solution is determined using
    // Bisection Method. The function is x^3 - x^2 + 2
    function func1(x) {
        pol1 = A1 * x * x * x + B1 * x * x + C1 * x + D1;
        return pol1;
    }
    function func2(x) {
        pol2 = A1 * x * x * x + B1 * x * x + C1 * x + D1;
        return pol2;
    }

    // Prints root of func(x) with error of EPSILON
    function bisection(s, p) {
        console.log('value of interval', func1(s), func2(p));
        if (func1(s) * func2(p) >= 0) {
            document.write("You have not assumed"
                + " right a and b");
            return;

        }

        // while ((p-s) >= EPSILON)
        // {
        // 	// Find middle point
        // 	k = (s+p)/2;
        //     x.push(k);
        //     y.push(pol);

        // 	// Check if middle point is root
        // 	if (func(k) == 0.0)
        // 		break;

        // 	// Decide the side to repeat the steps
        // 	else if (func(k)*func(s) < 0)
        // 		p = k;
        // 	else
        // 		s = k;

        // }
        // let iterations=document.getElementById('iterations');

        let k = s;
        console.log('I1',I1);
        for (i = 1; i <= I1; i++) {
            
                // Find middle point
                k = (s + p) / 2;
                x.push(k);
                p1.push(pol1);
                p2.push(pol2);
                iR.push(i);
                console.log('i',i)

                // Check if middle point is root
                if (func1(k) == 0.0)
                    break;

                // Decide the side to repeat the steps
                else if (func1(k) * func2(s) < 0)
                    p = k;
                else
                    s = k;
            
        }

        //prints value of c upto 4 decimal places
        // document.write("The value of " +
        // 			"root is : "+ k.toFixed(4));

        // console.log(k.toFixed(6));
        // rt = k.toFixed(6);
        root1 = document.getElementById('root1');
        root1.style.color = 'green';
        //  let root=document.getElementById('root');   
        // root1.innerHTML = rt;
        root1.innerHTML = k;

        let download = document.getElementById('download');
        const info = [];

        download.addEventListener('click', function () {

            for (n = 0; n < I1; n++) {
                info.push([iR[n], p1[n], p2[n], x[n]])
            };

            // if(info.length>0){
            //     info.splice(0,info.length);
            // }
            // else{
            //     console.log('empty')
            // }
            // download.onclick = function () {
               
            //     console.log('info', info)
            //     console.log('length', info.length)
            //     var doc = new jsPDF();
            //     console.log(download);
            //     doc.autoTable({
            //         head: [["iteration", "f(x)", "f(y)", "value of root"]],
            //         body: info
            //     });
            //     doc.save("Bisection method.pdf");

            // };
            // if (info.length > 0) {
            //     info.splice(0, info.length);
            // }
            // else {
            //     console.log('empty')
            // }
        
        });
        var button = document.getElementById("download");
        button.addEventListener("click", function () {
            var doc = new jsPDF("p", "mm", [300, 300]);
            doc.autoTable({
                        head: [["iteration", "f(x)", "f(y)", "value of root"]],
                        body: info
                    });
            doc.save("bisection.pdf");
        });


        // if(info.length>0){
        //     info.splice(0,info.length);
        // }
        // else{
        //         console.log('empty')
        //     }


    }
    //    console.log('le',info.length)
    // for (i=1,i<I1,i++){


    // }
    // let info=[iR,x,p1,p2];

    // let  download= document.getElementById('download')
    // download.addEventListener('click',function(){

    //     let info = []
    //     for (n = 0; n < I1; n++) {
    //         info.push([iR[n], p1[n], p2[n],x[n]])
    //     };

    //     download.onclick = function () {
    //         var doc = new jsPDF();
    //         console.log(download);
    //         doc.autoTable({
    //             head: [["iteration", "f(x)", "f(y)", "value of root"]],
    //             body: info
    //         });
    //         doc.save("Bisection method.pdf");
    //     };

    // });



    graph.style.display = 'block';

    // Driver program

    // Initial values assumed
    let s = IA, p = IB;
    bisection(s, p);

    console.log('x', x);
    console.log('p1', p1);
    console.log('p2', p2)
    graph = document.getElementById('graph')
    x1Values = [];
    x2Values = [];
    x3Values = [];
    for (var j = 0; j <= I1; j += 1) {
        x1Values.push(j);
        x2Values.push(j);
        x3Values.push(j);

    }
    var data = [
        { x: x1Values, y: x, name: 'value of root', mode: "lines" },
        { x: x2Values, y: p1, name: 'f(x)', mode: "lines" },
        { x: x3Values, y: p2, name: 'f(y)', mode: "lines" }
    ];


    // var data = [trace1,trace2,trace3];
    var layout = {
        title: "Value of root (x_i)",
        xaxis_title: "X value of root",
        yaxis_title: "Y Axis Title",
        legend_title: "Legend Title",
    }


    Plotly.newPlot('graph', data, layout, { editable: true });

    // result.preventDefault()


});




