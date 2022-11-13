import axios from 'axios'
import { response } from 'express';

const domain_list = ['nike', 'uber', 'ubereats', 'lyft', 'apple', 'samsung', 'lg', 'twitter', 'facebook', 'instagram', 'toyota', 'spotify', 'razer', 'starbucks', 'bestbuy', 'disney', 'yamaha', 'android', 'microsoft', 'google']

export const getLogo = async (domain) => {
    try {
      var config = {
        method: 'get',
        url: 'https://logo.clearbit.com/' + domain + '.com?format=jpg',
        headers: { }
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    catch {
      console.log(error)
    }

    return response.data
  
  };

export const getName = async (domain) => {
  try {
    return domain
  }
  catch{
    console.log(error)
  }
}



for (let i = 0; i < domain_list.length; i++) {
  getLogo(domain_list[i])
  getName(domain_list)
}