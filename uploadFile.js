/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

 const bucketName = 'endsemdarshan';

 const filePath = '/Users/darshan/Desktop/comments.txt';
 
 // The new ID for your GCS file
 const destFileName = 'Comments';
 
 // Imports the Google Cloud client library
 const {Storage} = require('@google-cloud/storage');
 
 // Creates a client
 const storage = new Storage();

 //Convert the Comments from ClientInterface to Text to textfile 
 // upload the textfile to GCP bucket
 
 async function uploadFile() {
   await storage.bucket(bucketName).upload(filePath, {
     destination: destFileName,
   });
 
   console.log(`${filePath} uploaded to ${bucketName}`);
 }
 
 uploadFile().catch(console.error);