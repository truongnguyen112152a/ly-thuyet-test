const express = require('express');
const app = express();
var port = 3001;
var tool = require('./container')
var arr = tool[0]
var arr2 = tool[1]
// Bài 1:
// a,in ra mảng
app.get("/arr",(req,res) => {
    res.json(arr)
})
// b,in ra theo id
app.get("/id",(req,res) => {
    var newArr = [];
    for(index in arr){
        newArr[index] = arr[index].id 
    }
    res.json(newArr)
})
// c,thay đổi giá trị của mảng
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
// d,thay đổi giá trị của mảng theo id
app.get("/up-to-date/:name/:address",(req,res) => {
    for(index in arr){
        if(arr[index].id === 2){
            arr[index].name = req.params.name;
            arr[index].address = req.params.address;
        }
    }
    res.json(arr)
})
// e,xóa một phần tử theo id
app.get("/delete/:id",(req,res) => {
    var numberX = parseInt(req.params.id);
    var newArr = arr.filter(value => value.id !== numberX);
    res.json(newArr);
})
// g,đăng nhập
app.get("/sign-in/:name/:password",(req,res) => {
    for(index in arr){
        if(req.params.name === arr[index].name && req.params.password === arr[index].password){
            return res.json("Đăng nhập thành công")
        }
    }
    return res.json("Sai name hoặc password")
})
// h,phân trang
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
// a,in ra tên thuộc tính
app.get("/show-name-key",(req,res) => {
    res.json(Object.keys(obj))
})
// b,in ra giá trị của thuộc tính
app.get("/show-value-key",(req,res) => {
    res.json(Object.values(obj))
})
// c,thêm thuộc tính 
// c1: query
app.get("/add-obj-query",(req,res) => {
    var addAge = req.query.age;
    var addCourse = req.query.course;
    obj.age = addAge;
    obj.course = addCourse;
    res.json(obj)

})
// c2: body
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.post("/add-obj-body",(req,res) => {
    var addAge = req.body.age;
    var addCourse = req.body.course;
    obj.age = addAge;
    obj.course = addCourse;
    res.json(obj)
})
// d,update
app.put("/test-values/:key",(req,res) => {
    var key = req.params.key
    var arrKey = Object.keys(obj)
    for(value of arrKey){
        if(key === value){
            return res.json(obj[key])
        }
    }
    return res.json(`Không có thuộc tính ${key}`)

})
// e,xóa
app.delete("/delete-key/:id",(req,res) => {
    var id = req.params.id
    var arrKey = Object.keys(obj)
    for(value of arrKey){
        if(id === value ){
            delete obj[value]
            return res.json(obj)
        }
    }
    return res.json(`Không có thuộc tính ${id}`)

})
app.listen(port,() => console.log("hello"))