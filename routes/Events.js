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
}).array("image", 2);

module.exports = app => {
  app.post("/event", requireAuth, async (req, res) => {
    if (!req.user.isAdmin) {
      return res.json({
        status: "Error",
        message: "You must be an admin"
      });
    }
    upload(req, res, async err => {
      if (err) {
        res.json({
          status: "Error",
          message: "Error in uploading the image"
        });
      } else {
        try {
          const newEvent = new Event({
            ...req.body,
            image: [req.files.map(file => file.filename)]
          });
          await newEvent.save();
          res.json({
            status: "Success",
            message: "Successfully uploaded the event"
          });
        } catch (err) {
          deleteUploadFile(req.files.map(file => file.filename));
          res.json({
            status: "Error",
            message: "There was a problem uploading the event"
          });
        }
      }
    });
  });
  app.patch("/event/:eventId", requireAuth, async (req, res) => {
    if (!req.user.isAdmin) {
      return res.json({
        status: "Error",
        message: "You must be an admin"
      });
    }
    if (!ObjectId.isValid(req.params.eventId)) {
      return res.json({
        error: "An event with this id cannot be found"
      });
    }
    upload(req, res, async err => {
      try {
        const updates = { ...req.body };
        const imagesArr = req.files.map(file => {
          return file.filename;
        });
        if (imagesArr.length) {
          updates.image = imagesArr;
        } else {
          delete updates.image;
        }
        const updatedEvent = await Event.findByIdAndUpdate(
          req.params.eventId,
          updates
        );
        if (!updatedEvent) {
          return res.json({
            status: "Error",
            message: "Couldn't find an event with that id"
          });
        }
        if (imagesArr.length) {
          deleteUploadFile(updatedEvent.image);
        }
        res.json({
          status: "Success",
          message: "Successfully updated the event"
        });
      } catch (err) {
        if (req.files.length) {
          deleteUploadFile(req.files.map(file => file.filename));
        }
        res.json({
          status: "Error",
          message: "There was a problem uploading the event"
        });
      }
    });
  });

  app.delete("/event/:eventId", requireAuth, async (req, res) => {
    if (!req.user.isAdmin) {
      return res.json({
        status: "Error",
        message: "You must be an admin"
      });
    }
    if (!ObjectId.isValid(req.params.eventId)) {
      return res.json({
        error: "An event with this id cannot be found"
      });
    }
    try {
      const deletedUser = await Event.findByIdAndDelete(req.params.eventId);
      if (!deletedUser) {
        return res.json({
          status: "Error",
          message: "Couldnt find an event with the given id"
        });
      }
      deleteUploadFile(deletedUser.image);
      res.json({
        status: "Success",
        message: "Successfully deleted the event"
      });
    } catch (error) {
      res.json({
        status: "Error",
        message: "Some error occurred while deleting the event"
      });
    }
  });

  // Fetch routes
  app.get("/fetch/event/archive", async (req, res) => {
    const currentDate = new Date();
    const results = await Event.find({
      date: {
        $lt: currentDate
      }
    }).sort({
      date: -1
    });
    res.json(results);
  });
  app.get("/fetch/event/upcoming", async (req, res) => {
    const currentDate = new Date();
    const results = await Event.find({
      date: {
        $gte: currentDate
      }
    }).sort({
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
        error: "Invalid Event Id"
      });
    }
    const result = await Event.findById(req.params.eventId);
    if (!result) {
      return res.json({ error: "An event with this id cannot be found" });
    }
    res.json(result);
  });
};
