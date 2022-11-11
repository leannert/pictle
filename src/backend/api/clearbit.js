import axios from 'axios'

const domain_list = ['nike.com', 'uber.com', 'ubereats.com', 'lyft.com', 'apple.com', 'samsung.com', 'lg.com', 'twitter.com', 'facebook.com', 'instagram.com']

export const getLogo = async (domain) => {
    try {
      var config = {
        method: 'get',
        url: 'https://logo.clearbit.com/' + domain + '?format=jpg',
        headers: {
          '': ''
        }
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

    }
  
  };



for (let i = 0; i < domain_list.length; i++) {
  var config = {
    method: 'get',
    url: 'https://logo.clearbit.com/' + domain_list[i],
    headers: {
      'sk_7a5352c264a90580c1ad91b4b0b6221e': ''
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}