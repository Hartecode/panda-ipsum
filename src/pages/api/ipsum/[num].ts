import { NextApiRequest, NextApiResponse } from 'next'
import IpsumGenerator from '../../../utils/ipsum-generator';
import * as pandaData from '../../../utils/panda.json'
const ipsumInstance = new IpsumGenerator(pandaData.original_text);



export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { num } = req.query
    const numOfPar = Number(num);
    console.log(numOfPar)
     
    if (isNaN(numOfPar)) {
      throw new Error('Must send a number')
    }

    if (numOfPar < 1) {
      throw new Error('The request at least needs to be 1')
    }

    if (numOfPar > 99) {
      throw new Error('The request must be 99 and under')
    }

    const ipsumArray = ipsumInstance.generateIpsumArray(numOfPar);

    res.status(200).json({ipsumArray})
  } catch (err) {
    console.log(err);
    res.status(400).json({ statusCode: 400, message: err.message })
  }
}
