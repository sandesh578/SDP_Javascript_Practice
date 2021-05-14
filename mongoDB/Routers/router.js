const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

//get mongoClient object from mongodb package
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/Members";

const { body, validationResult } = require("express-validator");

var db;
const dbName = "Members";
const collectionName = "member";

//connect mongoClient to mongodb local instance
MongoClient.connect(
    url,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    (err, client) => {
        if (err) {
            console.log(err.message);
        }
        //create mongodb database
        db = client.db(dbName);
        console.log(`Connected to mongoDB database at url ${url}`);
        console.log(`Database : ${dbName}`);
    }
);


router.get("/", (req, res) => {
    db.collection(collectionName)
        .find({})
        .toArray((err, doc) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).json(doc);
        });
});

router.get("/member/:_id", (req, res) => {
    let id = parseInt(req.params._id);
    db.collection(collectionName).findOne({ _id: id }, (err, doc) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (doc === null) {
            return res.status(500).json({ msg: `No member with id ${id} found.` });
        }
        res.status(200).json(doc);
    });
});

router.post(
    "/member",
    body("name")
        .exists()
        .isLength({ min: 3 })
        .withMessage("Name must have at least three characters."),
    body("_id")
        .exists()
        .isNumeric()
        .withMessage("Id must be present and must be a number."),
    body("email").exists().isEmail().withMessage("Email is not valid."),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const info = {
            _id: req.body._id,
            name: req.body.name,
            email: req.body.email,
        };
        db.collection(collectionName).insertOne(info, (err, doc) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.status(200).json({ msg: "Successfully Inserted", doc });
        });
    }
);

router.delete("/member/:_id", (req, res) => {
    let id = parseInt(req.params._id);
    db.collection(collectionName).deleteOne({ _id: id }, (err, doc) => {
        if (err) {
            res.status(500).send(err.message);
        }
        res.status(200).json({ msg: "Deleted successfully", doc });
    });
});

router.put("/member", (req, res) => {
    const id = req.body._id;
    const info = req.body;
    db.collection(collectionName).updateOne(
        { _id: id },
        { $set: info },
        (err, doc) => {
            if (err) {
                console.log(err.message);
            }
            res.status(200).json({ msg: "Updated successfully", doc });
        }
    );
});

module.exports = router;
