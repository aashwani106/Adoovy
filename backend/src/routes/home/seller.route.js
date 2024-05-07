import { Router } from "express";
import {createWebsite,deleteWebsite,getWebsitesByOwner} from "../../controllers/seller.controller.js"



const router = Router();

router.route("/createWebsite").post(createWebsite) 
router.route("/getWebsitesByOwner").get(getWebsitesByOwner)  
router.route("/deleteWebsite") .get(deleteWebsite)



export default router;

