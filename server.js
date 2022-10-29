const express = require('express')
const app = express()
const port = 25569
const path = require('path')
const bodyParser = require("body-parser");
const router = express.Router();
const Discord = require('discord.js')
// Static Files
app.use(express.static(__dirname + '/views/assets'));
app.use('/css', express.static(__dirname + 'views/assets/css'))
app.use('/js', express.static(__dirname + 'views/assets/js'))
app.use('/img', express.static(__dirname + 'views/assets/img'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set Views
app.set("views", path.join(__dirname, "/views"));
app.get('/', async (req, res) => {
    res.render('index.ejs')
})
const webhook = new Discord.WebhookClient({
      id: '973591864022269952',
      token: 'fnZn1ZGlusET7Sewf6zAC1Y7oN7dZY_xxxY-4iadxlb8wioEWvv4C1m9_e78PtegtI4L'       
});
app.post('/apply', function(req, res){
    const b = req.body
    const embed = new Discord.MessageEmbed()
    .setTitle(`Apply from ${req.body.fullname}`)
    .addField('Email', b.email)
    .addField('Phone Number', b.phonenumber)
    .addField('Discord Tag', b.discordtag)
    .addField('IP', `${req.rawHeaders[1]}`)
    .setColor('#5866ef')
    .setDescription(`**__Motivation:__**\n\`\`\`${req.body.motivation}\`\`\``)
    webhook.send({
        username: "ZeroxNode Apply Logs",
        avatarURL: `https://cdn.discordapp.com/attachments/954721693904035895/959446963995181106/ZeroxNode_Blue.png`,
        embeds: [embed]});
})
app.listen(port, function () { console.log(`Listening on port http://localhost:${port}`) })