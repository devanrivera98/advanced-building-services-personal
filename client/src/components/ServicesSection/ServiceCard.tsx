interface Card {
  id: number;
  title: string;
  text: string;
  image: string;
}

export default function ServiceCard({ title, text, image, id }: Card) {
  return (
    <>
      <div key={id} className="pb-5 service-card-container">
        <div>
          <img className="w-full" src={image} />
        </div>
        <div>
          <h1 className="py-2 text-lg font-semibold">{title}</h1>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}
