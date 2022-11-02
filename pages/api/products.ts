import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ products: Product[] }>
) {
  let products: Product[] = [];

  try {
    const data = await fetch("https://fakestoreapi.com/products");
    products = await data.json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ products: [] });
  }
  return res.status(200).json({ products });
}
