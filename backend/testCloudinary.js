import "dotenv/config";
import cloudinary from "./config/cloudinary.js";

try {
  const result = await cloudinary.api.resources_by_asset_folder(
    "ginas-luxury",
    {
      max_results: 100,
    }
  );

  console.log("Cloudinary connected successfully!");
  console.log(`Found ${result.resources.length} assets.\n`);

  result.resources
    .sort((a, b) => a.public_id.localeCompare(b.public_id))
    .forEach((asset) => {
      console.log(`${asset.public_id} -> ${asset.secure_url}`);
    });
} catch (error) {
  console.error("Cloudinary connection failed:");
  console.error(error.message);
}