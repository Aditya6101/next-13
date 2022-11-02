import ProductList from "./ProductList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products");

  return res.json();
}

export default async function Page() {
  const res = await getData();
  const { products } = res;

  return (
    <div className="flex gap-8">
      <div className="w-1/4">
        <ProductList products={products} />
      </div>
      <div className="w-3/4 p-2 border-2 rounded border-slate-700 bg-slate-900">
        <h3 className="text-lg font-medium">Product Details</h3>
      </div>
    </div>
  );
}
