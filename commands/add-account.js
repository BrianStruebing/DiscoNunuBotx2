const {Client, Message, MessageEmbed } = require("discord.js");


let icon = [
   "https://i.ibb.co/7Ky3gNw/image.png",
   "https://i.ibb.co/K2FPCf4/1.png",
   "https://i.ibb.co/Gd1d8Rd/2.png",
   "https://i.ibb.co/LPVGkK2/3.png",
   "https://i.ibb.co/ctFN6Z6/4.png",
   "https://i.ibb.co/86qTGNB/5.png",
   "https://i.ibb.co/VYJ0fZ7/6.png",
   "https://i.ibb.co/gmTZfYy/7.png",
   "https://i.ibb.co/QN9wWjc/8.png",
   "https://i.ibb.co/gJyRWWW/9.png"
];




// let selected_icon = random_index;



module.exports = {
   name: "add-account",
   description: "lets people add an account to the database",
   
   
   execute (message, client, args){
      
      let random_index = Math.floor(Math.random() * icon.length);
      console.log(random_index)
      const Embed = new MessageEmbed()
      .setTitle("Add your League Account to the Discord Server")
      .setColor(10181046)
      .setDescription("Please follow the steps listed below")
      .setThumbnail(icon[random_index])
      .setAuthor(message.author.username)
      .addFields({
         name: "Step 1",
         value: "Use the command as follows, !link-account 'region' 'playername' "
      },
      {
         name: "Step 2",
         value: "Change your summoner icon to the one you see on the right"
      },
      {
         name: "Cant See the Icon?",
         value: "If you can't see the icon, message an Admin, we will confirm it manually or reinstall Discord."
      },
      );


      message.author.send(Embed);
} 
  
}
