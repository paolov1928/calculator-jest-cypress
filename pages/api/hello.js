// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { country: 'MX', commodity: 'Mango', variable_cost: '1.24' },
    { country: 'BR', commodity: 'Mango', variable_cost: '1.42' },
  ]);
}
