const multer = require("multer");
const Event = require("../Models/Event");
const { deleteUploadFile } = require("../utilities/functions");
const { requireLogin, requireAuth } = require("../middlewares/middlewares");
const ObjectId = require("mongoose").Types.ObjectId;

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
  app.post("/event", requireAuth, upload.single("image"), async (req, res) => {
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
  app.patch(
    "/event/:eventId",
    requireAuth,
    upload.single("image"),
    async (req, res) => {
      if (!req.user.isAdmin) {
        deleteUploadFile(req.file.filename);
        return res.json({ status: "Error", message: "You must be an admin" });
      }
      if (!ObjectId.isValid(req.params.eventId)) {
        deleteUploadFile(req.file.filename);
        return res.json({
          error: "An event with this id cannot be found"
        });
      }
      try {
        const updates = {
          ...req.body,
          image: req.file ? req.file.filename : null
        };

        // If no image uploaded remove image key from updates
        if (!req.file) {
          delete updates.image;
        }
        const updatedEvent = await Event.findByIdAndUpdate(
          req.params.eventId,
          updates
        );
        if (req.file) {
          deleteUploadFile(updatedEvent.image);
        }
        res.json({
          status: "Success",
          message: "Successfully updated the event"
        });
      } catch (err) {
        if (req.file) {
          deleteUploadFile(req.file.filename);
        }
        res.json({
          status: "Error",
          message: "There was a problem uploading the event"
        });
      }
    }
  );
  app.get("/fetch/event/archive", async (req, res) => {
    const currentDate = new Date();
    const results = await Event.find({ date: { $lt: currentDate } }).sort({
      date: -1
    });
    res.json(results);
  });
  app.get("/fetch/event/upcoming", async (req, res) => {
    const currentDate = new Date();
    const results = await Event.find({ date: { $gte: currentDate } }).sort({
      date: -1
    });
    res.json(results);
  });
  app.get("/fetch/event/overview", async (req, res) => {
    const results = await Event.find({})
      .limit(10)
      .sort({ date: -1 });
    res.json(results);
  });

  app.get("/fetch/event/:eventId", async (req, res) => {
    if (!ObjectId.isValid(req.params.eventId)) {
      return res.json({
        error: "An event with this id cannot be found"
      });
    }
    const result = await Event.findById(req.params.eventId);
    res.json(result);
  });
};
