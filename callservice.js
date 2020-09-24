    var RequestService = require("request");
    const request = require('request-promise')

    async function Registerline() {
        alert("1234")
        var phoneNo = document.getElementById('phone').value;
        const profile = await liff.getProfile()
        let num = ''
        var Lineid = ''
        var userProfiles = ''
        var username = ''
        var lineurl = ''
        var phone=''
        num = num + liff.getContext().type
        username=profile.displayName
        alert(username +" &&&& "+ num)
  
        if (liff.getContext().type == "external") {
          
          document.getElementById("ID").append(liff.getContext().utouId)
          Lineid=liff.getContext().utouId
          lineurl =  liff.getDecodedIDToken().email
        }else if(liff.getContext().type  =="group"){
        
          document.getElementById("ID").append(liff.getContext().groupId)
          Lineid=liff.getContext().groupId
          lineurl =  liff.getDecodedIDToken().email
        }else if(liff.getContext().type == "room"){
         
          document.getElementById("ID").append(liff.getContext().roomId)
          Lineid=liff.getContext().roomId
          lineurl =  liff.getDecodedIDToken().email
        }else if(liff.getContext().type == "utou"){
          
          document.getElementById("ID").append(liff.getContext().utouId)
          Lineid=liff.getContext().utouId
          lineurl =  liff.getDecodedIDToken().email
        }
        phone=document.getElementById("phone").value
        alert(phone + " ----"+ Lineid)
        alert(lineurl + " email")
        try {
          alert("1")
          RequestService.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:60147/FeedRegisterLineBot/api/Register",
            "body": JSON.stringify({
              "User_ID": Lineid,
              "Phone_No": phone,
              "Email": lineurl,
              "Nameline": username
            })
            
          }, (error, response, body) => {
            if (error) {
              console.dir(error);
              alert("error"+ error)
  
              return error;
            } else {
              console.dir(JSON.parse(body));
              num = num + JSON.parse(body);
              alert("error"+ num)
              sendMsg()
            }
          });
       
        } catch (e) {
          console.log(e);
          err = e
          alert(err)
          num = num + "เข้า" + err
        }
        finally {
          num = "หมายเลข : " + phonenumber + " "
          alert(num)

        }
      }