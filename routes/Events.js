const multer = require("multer");
const Event = require("../Models/Event");
const passport = require("passport");
require("../services/passport");
const { deleteUploadFile } = require("../utilities/functions");

const requireAuth = passport.authenticate("jwt", { session: false });

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + "/../../uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
});

module.exports = app => {
  app.post("/events", requireAuth, upload.single("image"), async (req, res) => {
    if (!req.user.isAdmin) {
      deleteUploadFile(req.file.filename);
      return res.json({
        error: "You must be an admin"
      });
    }
    if (!req.file) {
      return res.redirect(
        `/dashboard?result=File is not supported or too large`
      );
    }
    try {
      const newEvent = new Event({
        ...req.body,
        image: req.file.filename
      });
      await newEvent.save();
      res.redirect(`/dashboard?result=Successfully submitted event`);
    } catch (err) {
      deleteUploadFile(req.file.filename);
      res.redirect(`/dashboard?result=Some error occured`);
    }
  });

  app.get("/events/archive", (req, res) => {
    const currentDate = Date.now();
  });
  app.get("/events", async (req, res) => {
    const events = await Event.find({});
    res.json(events);
  });

  app.get("/events/:eventId", async (req, res) => {
    const result = await Event.findById(req.params.eventId);
    res.json(result);
  });
};
