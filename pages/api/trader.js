// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  res.status(200).json([
    { COUNTRY: 'MX', COMMODITY: 'mango', VARIABLE_COST: '1.24' },
    { COUNTRY: 'BR', COMMODITY: 'mango', VARIABLE_COST: '1.42' },
  ]);
}
