import axios from "axios";
import qs from "qs";

const CLIENT_ID = 'febfffb4dd844f15920137f6c2862428'; 
const CLIENT_SECRET = '8a8dff8e325c477db469142b2271cfca'; 
const REDIRECT_URI = 'https://localhost:8000/callback';
const auth_token = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`, 'utf-8').toString('base64');

export const getAuth = async () => {
  try{
    
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    
    console.log("Spotify Token "+ response.data.access_token);   
    return response.data.access_token;
  } 
  catch(error){
    console.log(error);
  }
}

export const getAudioFeatures_Track = async (track_id) => {

  const access_token = await getAuth();
  
  const api_url = `https://api.spotify.com/v1/albums/${track_id}`;

  try{
    const response = await axios.get(api_url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        'Host': 'api.spotify.com'
      }
    });
    console.log(response.data);
    return response.data;
  }catch(error){
    console.log(error);
  }  
};

