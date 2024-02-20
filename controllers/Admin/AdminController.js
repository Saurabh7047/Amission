const CourseModal = require("../../models/course");
const nodemailer = require('nodemailer')

class AdminController {
  static display = async (req, res) => {
    try {
      const { name, image, _id } = req.user;
      const data = await CourseModal.find();
      res.render("admin/display", { d: data, n: name, i: image });
    } catch (error) {
      console.log(error);
    }
  };
  static courseview = async (req, res) => {
    try {
      const { name, image, _id } = req.user;
      const data = await CourseModal.findById(req.params.id);
      res.render("admin/view", { d: data, n: name, i: image });
    } catch (error) {
      console.log(error);
    }
  };
  static updatestatus = async (req, res) => {
    try {
      const { name, image, _id,email,status,comment } = req.user;
      const data = await CourseModal.findByIdAndUpdate(req.params.id,{
        comment:req.body.comment,
        status:req.body.status
      });
      this.sendMail(name,email,status,comment)
      req.flash('success','status update successfully')
      res.redirect('/admin/display')
      
    } catch (error) {
      console.log(error);
    }
  };
  static sendMail = async (name, email, status, comment) => {
    

    var transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "saurabhpb09@gmail.com",
        pass: "xiyrfixmiwngwmyf",
      },
    });
    var info = await transporter.sendMail({
      from: "codexbay18@gmail.com",
      to: email,
      subject: `courses ${status}`,
      text: "That was easy!",
      html: `<b> ${name}</b> course <b> ${status} </b> successful <br>
      <b>comment from admin</b> ${comment}`,
    });
  }
}
module.exports = AdminController;
