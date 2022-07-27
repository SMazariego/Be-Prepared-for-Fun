//declare your necessary constants. express router, packing items model, and withauth utility
const router = require("express").Router();
const { PackingItem } = require("../../models");
const withAuth = require("../../utils/auth");

//find all packing items with a vacay id indicated. this route will be used to populate the packing list page

router.get("/:id", withAuth, (req, res) => {
  PackingItem.findAll({
    where: {
      vacay_id: req.params.id,
    },
    attributes: ["id", "packing_text"],
  })
    .then((dbPackingItemData) => res.json(dbPackingItemData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//post a new packing item by adding it to the database linked to that vacay_id
router.post("/", withAuth, (req, res) => {
  console.log("creating things");
  //create packing item with attributes then res.json if it's good, error if there's a problem
  PackingItem.create({
    packing_text: req.body.packing_text,
    vacay_id: req.body.vacay_id,
  })
    .then((dbPackingItemData) => res.json(dbPackingItemData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
//put a change into a packing item by updating it by id in the database
//update packing item with attributes then res.json if it's good, error if there's a problem
router.put("/:id", withAuth, (req, res) => {
  //update packing item with attributes then res.json if it's good, error if there's a problem
  PackingItem.update(
    {
      packing_text: req.body.packing_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPackingItemData) => {
      if (!dbPackingItemData) {
        res.status(404).json({ message: "No item found with this id!" });
        return;
      }
      res.json(dbPackingItemData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//destroy packing item with the indicated id then res.json if it's good, error if there's a problem or on item with that id exists
router.delete("/:id", withAuth, (req, res) => {
  PackingItem.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPackingItemData) => {
      if (!dbPackingItemData) {
        res
          .status(404)
          .json({ message: "No packing list item found with this id!" });
        return;
      }
      res.json(dbPackingItemData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
