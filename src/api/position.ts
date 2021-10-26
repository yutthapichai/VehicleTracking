import { CronJob } from 'cron';
import axios from 'axios';

export const Token = Buffer.from(`adminTester:superAdmin`, 'utf8').toString(
  'base64',
);

console.log('Starting the new location every 10 seconds!');

const setCronJob = new CronJob('*/10 * * * * *', () => {
  console.log('This will be run every 10 seconds for update new location');
  currentPosition().then((result) =>
    console.log('Updated the new location.', result || 'No have data'),
  );
});
setCronJob.start();

const currentPosition = async () => {
  try {
    const dataPosition = {
      VehicleID: 1,
      Latitude: '37.7768006',
      Longitude: '-122.4187928',
    };
    const response = await axios.post(
      'http://localhost:3000/api/location',
      dataPosition,
      {
        // httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        headers: {
          Authorization: `Basic ${Token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error for update the API the new location.');
  }
};
