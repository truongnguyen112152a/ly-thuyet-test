/*
.gitignore : ẩn các file mà không muốn đẩy lên git
npm i -g nodemon : cài đặt package tự động uppdate lên server

* Express : là một framework dành cho NodeJs nó hỗ trợ các phương thức HTTP và midleware 
  => tạo ra một api vô cùng mạnh mẽ
  - syntax:
      var express = require('express') : khai báo thư viện
      var port = 3000;  khai báo cổng kết nối > 1000 
      var app = express() : tạo đối tượng là app của hàm express()
      app.get('/hh', function (req, res) { => tạo api (/tên api)
          res.json("hahaha") : hiển thị trực tiếp nội dung
          res.send("<h1>Hello</h>") : biên dịch thành html
          mỗi một api chỉ có một hàm res và có nhiều req
      })
      var path = require('path') : module cung cấp các tiện ích để xử lí đường dẫn(đã được install)
      path.join('name','tên file') : nối các đoạn đường dẫn thành một đường dẫn (name/tên file)
      path.join(__dirname,"./demo.html") : __dirname là thư mục chứa tập tin đang làm việc
      app.get('/test', function (req, res) {
        res.sendFile(path.join(__dirname,"./demo.html")) : tạo liên kết động
      })
      app.use(express.static("tên thư mục")) : dẫn một thư mục có chứa file cần dùng vào api
      app.use(express.static(path.join(__dirname,"./demo.css"))) : dẫn trực tiếp file css vào api
      app.listen(port,function(){ : tạo cổng kết nối và thực hiện một nhiệm vụ hiển thị trên terminal
        console.log("hello",port)
      })

* Router : phân chia api
  - syntax: 
    Với file router:
      var express = require('express');
      var router1 = express.Router();
      module.exports = router1
    Với file index:
      var router1 = require("./router/router1.js")
      app.use("/router1",router1)

* Query: là một chuỗi truy vấn mà client gửi lên server
  - syntax: localhost:3000/users/search?name=3&&pass=999 : các truy vấn được ngăn cách bởi dấu ? 
      app.get('/users/search', (req,res) => {
        var name_search = req.query.name // lấy giá trị của key là name trong query parameters gửi lên
      })

* Params: client truyền tham số
  - syntax: localhost:3000/users/name1/name2
      app.get('/users/:name1/:name2',function(req,res){
        var name1 = req.params.name1
        var name2 = req.params.name2
      })
* Body: module body-parser hỗ trợ phân tích dữ liệu từ client nhập vào
  - syntax:
    var bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: false }))
      => Ý nghĩa là một đối tượng body chứa dữ liệu mà đã được parsed(phân tích) đưa vào request
      Dữ liệu đó là một cặp key-value
      dữ liệu của value sẽ có kiểu dữ liệu là string hoặc array nếu extended: false
      còn là các kiểu khác nếu extended: true
* Morgan: Module morgan hỗ trợ việc logger request(kiểm tra request lên server) kiểm tra bug 
  syntax: 
    var morgan = require('morgan')
    app.use(morgan('combined'))
* resful api: quy tắc đặt tên api
  - method:
      không nhận dữ liệu từ người dùng:
      + get: hiển thị dữ liệu hoặc giao diện 
      nhận dữ liệu từ người dùng (không thử trực tiếp trên browser):
      + put (patch): cập nhật theo một điều kiện 
      + delete: xóa các giá trị theo một điều kiện
      + post: các trường hợp còn lại
  - tên api: một mảng user:
      get("/user"): hiển thị toàn bộ dữ liệu có trong array user
      get("/user/:id"): hiển thị chi tiết 1 dữ liệu trong mảng array (giá trị index 0,1,2,3)
      post("/user"): thêm mới 1 giá trị vào trong mảng array user
        hoặc kiểm tra tính chính xác của dữ liệu
      put("/user/:id"): cập nhật giá trị 1 bản ghi trong array
      delete("/user/:id"): xóa giá trị 1 bản ghi trong array
* Postman: công cụ làm việc với API
  - cho phép gửi HTTP Request với các method GET,PUST,POST,delete
  - cho phép POST dữ liệu theo dạng form (key-value),text,json
  - hiện kết quả trả về text,hình ảnh,XML,json
  - cho phép thay đổi header của các request
  - gom các request cùng server vào với nhau
  - với POST(hoặc PUT): thêm nội dung vào phần body(x-www-form) => send request
*/