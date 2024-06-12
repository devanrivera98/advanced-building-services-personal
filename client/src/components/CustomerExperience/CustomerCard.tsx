interface card {
  quote: string;
  profileImage: string;
  name: string;
  description: string;
}

export default function CustomerCard({
  quote,
  profileImage,
  name,
  description,
}: card) {
  return (
    <>
      <div className="bg-white rounded">
        <div>
          <blockquote>"{quote}"</blockquote>
        </div>
        <div>
          <div>
            <img src={profileImage} />
          </div>
          <div>
            <h1>{name}</h1>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </>
  );
}
