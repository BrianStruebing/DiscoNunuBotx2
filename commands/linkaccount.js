const discord = require("discord.js");
const axios = require("axios")
require("dotenv").config();
const { execute } = require("./add-account");
const collect = require("collect.js")



module.exports = {
   name:"link",

   async execute (message){
     

     const filter = m => m.author.id === message.author.id;
     message.reply("Please chose the server... Will expire in 10 seconds...")
     .then(r => r.delete({timeout: 10000}));

      message.channel.awaitMessages(filter, 
      {
         max: 1, 
         time: 10000
      }).then(collected => {
         
         //console.log("Collected obj", collected.last().content)

         let input = collected.last().content.split(" ")
         let user = input[0];
         let region = input[1];
         if(collected.first().content === "cancel"){
            return message.reply("Canceled!");
         }
         
         axios.get
         (`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=RGAPI-0deb4faf-25ae-433e-82bd-a9d2e30f74fe`)
         .then((response) => {
          let icon = response.data
          console.log(icon)
         })
         .catch((err) => {
           console.log(err);
         });
        
       
         
        
      //  (async () => {
      //   let profileIcon = await getProfileIcon();
      //      message.author.send(`The ProfileIcon of ${user} is \n ${profileIcon}`)
      //   });
       

      
      })
      .catch(err => {
        console.log(err)
      });
  
   
     
      


   }
}

