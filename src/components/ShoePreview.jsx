export function ShoePreview({ shoe }) {
  return (
    <article className="shoes-preview">
      <h3 className="shoe-name">{shoe.name}</h3>
      <p className="shoe-brand">{shoe.brand}</p>
      <img className="shoe-img" src={shoe.img} alt={shoe.name} />
      <p className="shoe-price">{shoe.price} $</p>
    </article>
  );
}
