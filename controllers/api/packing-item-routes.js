const router = require("express").Router();
const { PackingItem } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  PackingItem.findAll()
    .then((dbPackingItemData) => res.json(dbPackingItemData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  PackingItem.create({
    //todo add packing item fields
    packingitem_text: req.body.packingitem_text,
    user_id: req.session.user_id,
    vacay_id: req.body.vacay_id,
  })
    .then((dbPackingItemData) => res.json(dbPackingItemData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

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
