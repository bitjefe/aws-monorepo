const AWS = require('aws-sdk');
const SES = new AWS.SES();

const FROM_EMAIL_ADDRESS = process.env.FROM_EMAIL_ADDRESS;
const TO_EMAIL_ADDRESS = process.env.TO_EMAIL_ADDRESS;

function sendLeadInfo(formData) {
  
    let bodyText = 'Someone just signed up for the Host Waitlist: \n\n'  

    bodyText += 'HostType: ' + formData.hostType + '\n'
    bodyText += 'Name: ' + formData.businessName + '\n'
    bodyText += 'Email: ' + formData.email + '\n'
    bodyText += 'Locations: ' + formData.locations + '\n'
    bodyText += 'State: ' + formData.state + '\n'
    bodyText += 'Message: '+ formData.message + '\n\n'
    bodyText += 'Cheers, \n -- UponBot'

    const emailParams = {
        Source: FROM_EMAIL_ADDRESS, 
        ReplyToAddresses: ['testReply@email.com'],
        Destination: {
          ToAddresses: [TO_EMAIL_ADDRESS], 
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: bodyText,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'New Host Lead for Upon',
          },
        },
    };

    const promise =  SES.sendEmail(emailParams).promise();
    return promise
}


exports.sendEmail = async(event) => {
    console.log('sendEmail called');
    
    const record = event.Records[0];
    const eventName = record.eventName;
    const dynamodb = record.dynamodb;
    
    if (eventName === "INSERT") {
        const formData = {
            hostType: dynamodb.NewImage.hostType.S,
            businessName: dynamodb.NewImage.businessName.S,
            message: dynamodb.NewImage.message.S,
            email: dynamodb.NewImage.email.S,
            locations: dynamodb.NewImage.locations.S,
            state: dynamodb.NewImage.state.S,
        }

        console.log("sendEmail leadData:", formData);

        return sendLeadInfo(formData).then(data => {
            console.log("sendLeadInfo sent email successfully!", data);
        }).catch(error => {
            console.log("sendLeadInfo error", error);
        });
    } else {
        console.log("sendEmail no stream record found")
        return
    }
    

}