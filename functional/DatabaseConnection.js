const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();



//get catogories
router.get("/", async (req, res) => {
  const catagories = await loadCatagoryCollection();
  res.send(await catagories.find({}).toArray());
});

//add tasks
router.post("/", async (req, res) => {
  const catagories = await loadCatagoryCollection();
  await catagories.insertOne({
    catagory_id : req.body.catagory_id,
    catagory_name: req.body.catagory_name,
    dateCreated: new Date(),
  });
  res.status(201).send();
});
//delete task
router.delete("/:id", async (req, res) => {
  const catagories = await loadCatagoryCollection();
  await catagories.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadCatagoryCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://saty168:1234@saty-cloud-db.ujtoz.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("client").collection("api").collection("").collection("");
}

module.exports = router;
