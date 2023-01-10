import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!  from user");
});

router.get("/users", (req, res) => {});


export default router;