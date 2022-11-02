export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="space-y-2">
      {products.map((product) => (
        <li key={product.title} className="truncate">
          {product.id}. {product.title}
        </li>
      ))}
    </ul>
  );
}
