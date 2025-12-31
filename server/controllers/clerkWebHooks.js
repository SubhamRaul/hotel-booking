import User from "../Models/User.model.js";
import pkg from "svix";

const { Webhook } = pkg;

const clerkWebhooks = async (req,res) => {
    try {
        // create a svix instance with clerk webhook secret
        const whook = new webhook(process.env.CLERK_WEBHOOK_SECRET);
        // getting headers from request
        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature'],
        }

        // verifying headers and request body
        await whook.verify(JSON.stringify(req.body), headers);

        // getting data from req body
        const {data , type} = req.body;

        const userData = {
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username:data.first_name + " " + data.last_name,
            image:data.image_url,
        }

        // Swith case for diff events

        switch(type){
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id,userData);
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;
            }
            default: break;
        }

        res.json({success:true , message:"Webhook recived successfully"});
    } catch (error) {
        console.log(error.message);
        res.json({success:false , message:"Could not process webhook"});
    }
}

export default clerkWebhooks;