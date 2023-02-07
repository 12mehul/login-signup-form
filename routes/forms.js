const express = require("express");
const { 
    getFormList,
    getForm,
    createForm,
} = require("../controllers/forms");

const router = express.Router();

router.route("/login").get(getForm);
router.route("/signup").post(createForm);
router.route("/list").get(getFormList);

module.exports = router;