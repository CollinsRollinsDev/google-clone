import fetch from 'node-fetch';


export default async function handler(req, res) {
  const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
  const {url} = req.query;
  console.log(process.env.Google_Api_Key, " as process")

    if(!url){
      return res.status(400).json({
        message:'Error on request!'
      })
    }
 try {
  const myResponse = await fetch(`${baseUrl}${url}`, {
    method: "GET",
    headers: {
      "x-user-agent": "desktop",
      "x-proxy-location": "EU",
      "x-rapidapi-host": "google-search3.p.rapidapi.com",
      "x-rapidapi-key":process.env.Google_Api_Key,
    },
  });
  const data = await myResponse.json();
  return res.status(200).json({
    data:data
  })
 } catch (error) {
  return res.status(500).json({
    message:'Error on request!'
  })
 }
}
