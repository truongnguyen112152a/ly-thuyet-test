const express = require('express');
const app = express();
var port = 3001;
// Bài 1:
var arr = [
    {
        id: 1,
        name: "Phong",
        password: "1",
        address: "HN"
    },
    {
        id: 2,
        name: "Tu",
        password: "1",
        address: "BN"
    },
    {
        id: 3,
        name: "Huy",
        password: "1",
        address: "TH"
    },
    {
        id: 4,
        name: "Thang",
        password: "1",
        address: "HG"
    }
]
app.get("/arr",(req,res) => {
    res.json(arr)
})
app.get("/id",(req,res) => {
    var newArr = [];
    for(index in arr){
        newArr[index] = arr[index].id 
    }
    res.json(newArr)
})
app.get("/change",(req,res) => {
    var obj = {
        id: 5,
        name: "Vu",
        password: "1",
        address: "Mỹ"
    }
    arr.push(obj)
    res.json(arr)
})
app.get("/up-to-date/:name/:address",(req,res) => {
    for(index in arr){
        if(arr[index].id === 2){
            arr[index].name = req.params.name;
            arr[index].address = req.params.address;
        }
    }
    res.json(arr)
})
app.get("/delete/:id",(req,res) => {
    var idRemove = req.params.id;
    function remove(x) {
        var numberX = parseInt(x);
        var newArr = arr.filter(value => value.id !== numberX);
        res.json(newArr);
    }
    remove(idRemove)
})
app.get("/sign-in/:name/:password",(req,res) => {
    for(index in arr){
        if(req.params.name === arr[index].name && req.params.password === arr[index].password){
            return res.json("Đăng nhập thành công")
        }
    }
    return res.json("Sai name hoặc password")
})
var arr2 = [
    {
        id: 1,
        name: "Phong",
        password: "1",
        address: "HN"
    },
    {
        id: 2,
        name: "Tu",
        password: "1",
        address: "BN"
    },
    {
        id: 3,
        name: "Huy",
        password: "1",
        address: "TH"
    },
    {
        id: 4,
        name: "Thang",
        password: "1",
        address: "HG"
    },
    {
        id: 5,
        name: "Phong",
        password: "1",
        address: "HN"
    },
    {
        id: 6,
        name: "Tu",
        password: "1",
        address: "BN"
    },
    {
        id: 7,
        name: "Huy",
        password: "1",
        address: "TH"
    },
    {
        id: 8,
        name: "Thang",
        password: "1",
        address: "HG"
    },
    {
        id: 9,
        name: "Phong",
        password: "1",
        address: "HN"
    },
    {
        id: 10,
        name: "Tu",
        password: "1",
        address: "BN"
    },
    {
        id: 11,
        name: "Huy",
        password: "1",
        address: "TH"
    },
    {
        id: 12,
        name: "Thang",
        password: "1",
        address: "HG"
    },
    {
        id: 13,
        name: "Phong",
        password: "1",
        address: "HN"
    },
    {
        id: 14,
        name: "Tu",
        password: "1",
        address: "BN"
    },
    {
        id: 15,
        name: "Tu",
        password: "1",
        address: "BN"
    }
]
app.get("/Tab/:number",(req,res) => {
    var tab = parseInt(req.params.number);
    var newArr2 = [];
    var x = 0;
    for(let i = 0; i < 15; i += 5){
        newArr2[x] = arr2.slice(i, i + 5);
        x++;
    }
    for(let i = 0; i < newArr2.length; i++){
        if( tab === i){
           return res.json(newArr2[tab])
        }
    }
    return res.json(`Nhập Tab từ 0 đến ${newArr2.length - 1}`)
})
// Bài 2
var obj = {name: "Nodemy",address: "Nguyễn Xiển"}
app.get("/show-name-key",(req,res) => {
    res.json(Object.keys(obj))
})
app.get("/show-value-key",(req,res) => {
    res.json(Object.values(obj))
})
app.get("/add-obj-query",(req,res) => {
    var addAge = req.query.age;
    var addCourse = req.query.course;
    obj.age = addAge;
    obj.course = addCourse;
    res.json(obj)

})
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.post("/add-obj-body",(req,res) => {
    var addAge = req.body.age;
    var addCourse = req.body.course;
    obj.age = addAge;
    obj.course = addCourse;
    res.json(obj)
})
app.put("/test-values/:key",(req,res) => {
    var arrKey = Object.keys(obj)
    for(value of arrKey){
        if(req.params.key === value){
            return res.json("đã được uppdate")
        }
    }
    return res.json("chưa được uppdate nhập giá trị khác")
})
app.get("/test-get/:key",(req,res) => {
    var arrKey = Object.keys(obj)
    for(value of arrKey){
        if(req.params.key === value){
            return res.json("đã được uppdate")
        }
    }
    return res.json("chưa được uppdate nhập giá trị khác")
})
app.listen(port,() => console.log("hello"))