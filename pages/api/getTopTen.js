

export default function handler(req,res) {
    const getData = async () => {
          const response = await fetch(
            `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e2e0733d-5ee0-4150-8bf9-e0d5cd12b07e`,
            {
              method: 'GET',
              headers: {
                Accept: '*/*',
                'X-CMC_PRO_API_KEY': 'e2e0733d-5ee0-4150-8bf9-e0d5cd12b07e',
              },
            }
          )
          const data = await response.json()
          res.status(200).json({ data })
    }
    ( async () => await getData())();
}