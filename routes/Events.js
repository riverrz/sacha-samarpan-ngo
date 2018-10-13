const multer = require("multer");
const Event = require("../Models/Event");
const { deleteUploadFile } = require("../utilities/functions");
const { requireLogin, requireAuth } = require("../middlewares/middlewares");

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
        status: "Error",
        message: "You must be an admin"
      });
    }
    if (!req.file) {
      return res.json({
        status: "Error",
        message: "Error in uploading the image"
      });
    }
    try {
      const newEvent = new Event({
        ...req.body,
        image: req.file.filename
      });
      await newEvent.save();
      res.json({
        status: "Success",
        message: "Successfully uploaded the event"
      });
    } catch (err) {
      deleteUploadFile(req.file.filename);
      res.json({
        status: "Error",
        message: "There was a problem uploading the event"
      });
    }
  });

  app.get("/events/fetch/archive", async (req, res) => {
    const currentDate = new Date();
    const results = await Event.find({ date: { $lt: currentDate } });
    res.json(results);
  });
  app.get("/events/fetch/upcoming", async (req, res) => {
    const currentDate = new Date();
    const results = await Event.find({ date: { $gte: currentDate } });
    res.json(results);
  });
  app.get("/events/fetch/overview", async (req, res) => {
    const results = await Event.find({}).limit(10);
    res.json(results);
  });

  app.get("/events/fetch/:eventId", async (req, res) => {
    const result = await Event.findById(req.params.eventId);
    res.json(result);
  });
};
