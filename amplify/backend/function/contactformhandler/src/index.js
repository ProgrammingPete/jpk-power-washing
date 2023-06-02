/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	SES_EMAIL
	SES_EMAIL_TEST
Amplify Params - DO NOT EDIT */


const { SESClient, SendEmailCommand } =  require("@aws-sdk/client-ses");
const client = new SESClient({ region: process.env.REGION });

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S
      console.log(process.env.SES_EMAIL_MASTER);
      console.log(process.env.SES_EMAIL);
      console.log(candidateName);
      console.log(candidateEmail);
      console.log(candidateMessage);
      const input = { // SendEmailRequest
        Source: process.env.SES_EMAIL_MASTER, // required
        Destination: { // Destination
          ToAddresses: [ // AddressList
            process.env.SES_EMAIL, process.env.SES_EMAIL_MASTER
          ],
        },
        Message: { // Message
          Subject: { // Content
            Data: 'Free Estimate Request'
          },
          Body: { // Body
            Text: { Data: `Email: ${candidateEmail}, Name: ${candidateName}, Message: ${candidateMessage}` },
          },
        }
      };
      const command = new SendEmailCommand(input);
      const response = await client.send(command);
      console.log(`response: ${JSON.stringify(response)}`);
    }
  }
  return { status: 'done' };
};