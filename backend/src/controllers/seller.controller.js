import { Seller } from "../models/seller.model.js";
import { User } from "../models/user.model.js";

//Creating the websites
const createWebsite = async (req, res) => {
  try {
      const { website, status,le_id } = req.body;

      // Create a new website document associated with the user ID
      const newWebsite = await Seller.create({
          website,
          websiteowner: le_id, // Set websiteowner as user ID
          status,
      });

      // Send response with the created website data
      res.status(200).json({
          error: false,
          data: newWebsite,
      });
  } catch (error) {
      // Handle errors
      console.error('Error creating website:', error);
      res.status(500).json({
          error: true,
          message: "Something went wrong",
      });
  }
};

//Deleting a website
const deleteWebsite = async (req, res) => {
  try {
    const { websiteId } = req.params;

    // Find the index of the website in the dummy data array
    const index = Seller.findById(websiteId);

    // Check if the website exists
    if (!index) {
      return res.status(404).json({ error: true, message: "Website not found" });
    }

    // Delete the website from the array
    dummyWebsites.splice(index, 1);

    res.status(200).json({ error: false, message: "Website deleted successfully" });
  } catch (error) {
    console.error('Error deleting website:', error);
    res.status(500).json({ error: true, message: "Something went wrong" });
  }
};


//Retrieves the websites as per the owner
const getWebsitesByOwner = async (req, res) => {
  try {
    const { le_id } = req.query;

    // Find the user by le_id
    const user = User.findOne({ le_id: le_id });

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    // Find websites based on the user's le_id
    const websites = await Seller.find({ websiteowner: user.le_id });


    // Replace websiteowner value with user's name
    const websitesWithUserNames = websites.map(website => ({
      ...website,
      websiteowner: user.fullName // Assuming the user's full name is stored in the fullName property
    }));

    // Check if websites were found
    if (websites.length > 0) {
      res.status(200).json({
        error: false,
        data: websitesWithUserNames,
      });
    } else {
      res.status(404).json({
        error: true,
        message: "No websites found for the specified user",
      });
    }
  } catch (error) {
    console.error('Error retrieving websites by user le_id:', error);
    res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

//Route for updating system
const updateWebsite = async (req, res) => {
  try {
      const { websiteId } = req.params; // Assuming websiteId is passed as a URL parameter
      const { website, status } = req.body; // Assuming website URL and status are passed in the request body

      // Check if the website exists
      const existingWebsite = await Seller.findById(websiteId);
      if (!existingWebsite) {
          return res.status(404).json({ error: true, message: "Website not found" });
      }

      // Update the website URL and status
      existingWebsite.website = website;
      existingWebsite.status = status;
      await existingWebsite.save();

      res.status(200).json({ error: false, message: "Website updated successfully", data: existingWebsite });
  } catch (error) {
      console.error('Error updating website:', error);
      res.status(500).json({ error: true, message: "Something went wrong" });
  }
};


  
  
  export {createWebsite,getWebsitesByOwner,deleteWebsite,updateWebsite};
