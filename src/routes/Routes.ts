import { Router } from "express";

import {getAllEntries, getEntry, createEntry, updateEntry, deleteEntry} from "../controllers/entries";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World! from user");
});

router.get("/entries", getAllEntries);

router.get("/entries/:id", getEntry);

router.post("/entries", createEntry);

router.put("/entries/:id", updateEntry);

router.delete("/entries/:id", deleteEntry);

export default router;