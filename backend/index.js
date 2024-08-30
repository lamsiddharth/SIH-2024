const express = require("express");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());


router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;

