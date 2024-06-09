interface Card {
  title: string;
  text: string;
  image: string;
}

export default function ServiceCard({ title, text, image }: Card) {
  return (
    <>
      <div className="pb-5">
        <div>
          <img src={image} />
        </div>
        <div>
          <h1 className="py-2 text-lg">{title}</h1>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
}
