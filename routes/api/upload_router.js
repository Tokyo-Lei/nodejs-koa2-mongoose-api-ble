var router = require('koa-router')();
const multer = require('koa-multer');//加载koa-multer模块
var upload_controller = require('../../app/controllers/upload_controller');
//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, process.cwd()+ '/files/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });//{ dest: '../../files/uploads/' }
router.post('/connect',upload.single('file'), upload_controller.connect);
//router.post('/upload1', upload_controller.upload1);
//router.post('/upload1',upload.single('file'), ()=>{
//	console.log("test-upload");
//});
module.exports = router;