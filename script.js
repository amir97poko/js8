do{
    var a = prompt('Введите имя')
}while (!isNaN(a) || a == null || a == '') ;
let b = +prompt('Введите возраст')

do{
    var c = prompt('Введите имя')
}while (!isNaN(c) || c == null || c == '') ;
let d = +prompt('Введите возраст')

do{
    var e = prompt('Введите имя')
}while (!isNaN(e) || e == null || e == '') ;
let f = +prompt('Введите возраст')

do{
    var j = prompt('Введите имя')
}while (!isNaN(j) || j == null || j == '') ;
let h = +prompt('Введите возраст')

do{
    var m = prompt('Введите имя')
}while (!isNaN(m) || m == null || m == '') ;
let n = +prompt('Введите возраст')

do{
    var l = prompt('Введите имя')
}while (!isNaN(l) || l == null || l == '') ;
let p = +prompt('Введите возраст')

do{
    var y = prompt('Введите имя')
}while (!isNaN(y) || y == null || y == '') ;
let t = +prompt('Введите возраст')

do{
    var r = prompt('Введите имя')
}while (!isNaN(r) || r == null || r == '') ;
let w = +prompt('Введите возраст')

do{
    var q = prompt('Введите имя')
}while (!isNaN(q) || q == null || q == '') ;
let s = +prompt('Введите возраст')

do{
    var o = prompt('Введите имя')
}while (!isNaN(o) || o == null || o == '') ;
let g = +prompt('Введите возраст')

    

const users = {
    '1':{
        Пользавотель: 1,
        имя: a,
        возраст: b
    },
    '2':{
        Пользавотель: 2,
        имя: c,
        возраст: d
    },
    '3':{
        Пользавотель: 3,
        имя: e,
        возраст: f
    },
    '4':{
        Пользавотель: 4,
        имя: j,
        возраст: h
    },
    '5':{
        Пользавотель: 5,
        имя: m,
        возраст: n
    },
    '6':{
        Пользавотель: 6,
        имя: l,
        возраст: p
    },
    '7':{
        Пользавотель: 7,
        имя: y,
        возраст: t
    },
    '8':{
        Пользавотель: 8,
        имя: r,
        возраст: w
    },
    '9':{
        Пользавотель: 9,
        имя: q,
        возраст: s
    },
    '10':{
        Пользавотель: 10,
        имя: o,
        возраст: g
    }
}

for (const key in users) {
    for (const keys in users[key]) {
        console.log(keys + ' - ' + users[key][keys]);
    }
}