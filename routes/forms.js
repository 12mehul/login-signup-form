const express = require("express");
const { 
    getFormList,
    getForm,
    createForm,
    updateForm,
    deleteForm,
} = require("../controllers/forms");

const router = express.Router();

router.route("/").get(getFormList).post(createForm);
router.route("/:id").get(getForm).patch(updateForm).delete(deleteForm);

module.exports = router;