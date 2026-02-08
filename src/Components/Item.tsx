interface ItemProps {
  item: string;
  Name: string;
  price: number;
  description: string;
  imageURL: string;
}

export function Item({ item, Name, price, description, imageURL }: ItemProps) {
  return (
    <article className="mx-4 flex max-w-2xl flex-col items-center gap-6 rounded-lg border-1 border-gray-200 bg-white p-4 md:mx-auto md:w-full md:flex-row md:gap-8">
      <img
        src={imageURL}
        alt={Name}
        className="h-40 w-full rounded object-cover md:h-auto md:w-40"
      />
      <div className="flex w-full flex-col gap-4 md:w-auto">
        <p className="text-pie-orange text-sm font-medium tracking-wide uppercase">
          {item}
        </p>
        <div className="flex flex-col">
          <h2 className="text-pie-charcoal text-xl font-bold">{Name}</h2>
          <p className="text-pie-gray mt-1 text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-pie-orange border-pie-orange/30 bg-pie-pink flex w-24 items-center justify-between rounded-lg border px-3 py-1">
            <button type="button" className="text-xl">
              -
            </button>
            <span className="text-pie-charcoal text-base font-medium">1</span>
            <button type="button" className="text-xl">
              +
            </button>
          </div>
          <button
            type="button"
            className="text-pie-gray hover:text-pie-charcoal text-sm underline underline-offset-2"
          >
            tot ziens
          </button>
        </div>
      </div>
      <p className="text-pie-charcoal ml-auto text-2xl font-bold md:mr-4">
        ${price.toFixed(2)}
      </p>
    </article>
  );
}
