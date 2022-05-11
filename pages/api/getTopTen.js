export default function handler(req,res) {
    const getData = async () => {
        let response = null;
        new Promise( async (resolve, reject) => {
            try {
                response = await fetch(
                  `https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
                  {
                    method: 'GET',
                    headers: {
                      Accept: '*/*',
                      'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
                    },
                  }
                )
            } catch (error) {
              response = null;
              console.log(error)
              reject(error)  
            }
            if(response){
                const json = response.data;
                console.log(json)
                resolve(json)
            }
        })
        res.status(200).json({
            success:true,
            response,
        })
    }
    ( async () => await getData())();
}