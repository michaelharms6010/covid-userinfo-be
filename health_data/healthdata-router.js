const router = require("express").Router();
const HealthData = require("./healthdata-model");
const restricted= require("../auth/restricted-middleware");

const admin_ids = [13, 30];


router.get("/", (req, res) => {
    HealthData.getAll()
    .then(healthData => {
      res.status(200).json(healthData);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "error getting data" });
    });
});

router.get("/all", (req, res) => {
    HealthData.getAll()
    .then(healthData => {
      res.status(200).json(healthData);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "error getting data" });
    });
});

router.get("/count", (req, res) => {
    HealthData.getCount()
    .then(healthData => {
      res.status(200).json(healthData[0].CNT);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "error getting data" });
    });
});

router.get("/mine", restricted, (req, res) => {
  const user_id = req.decodedJwt.id;
  HealthData.getUserData(user_id)
      .then(post => {
          res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: "error bad request" });
      });
  
});

router.get("/:id", (req, res) => {
    HealthData.findById(req.params.id)
    .then(healthData => {
      if (healthData) {
      res.status(200).json(healthData);
      } else {
        res.status(404).json({message: "Wordlist not found"})
      }
    })
    .catch(err => {
      res.status(404).json({ errorMessage: "user not found" });
    });
});

router.post("/", restricted, (req, res) => {
  const body = req.body;
  body.user_id = req.decodedJwt.id;
  if (body.wordlist && body.title) {
    HealthData.add(body)
      .then(post => {
          res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: "error bad request" });
      });
  }  else {
    res.status(400).json({ errorMessage: "input a wordlist and title" });
  }
});

router.put("/:id", restricted, (req, res) => {});

router.delete("/:id", restricted, (req, res) => {
  const user_id = req.decodedJwt.id;
  HealthData.findById(req.params.id)
  .then(healthData => {
      if (healthData.user_id === user_id || admin_ids.includes(user_id)) {
        HealthData.remove(req.params.id)
      .then(deleted => {
        if(deleted){
          res.status(200).json({message: "item deleted", id: Number(req.params.id)})
        } 
      })
      .catch(err => {
        res.status(500).json({ errorMessage: "server error"})
      })
    }
    else {
      res.status(401).json({message: "cmon now"})
    }
  })
  .catch(err => {
    res.status(404).json({ errorMessage: "user not found" });
  });
  
});

module.exports = router;
