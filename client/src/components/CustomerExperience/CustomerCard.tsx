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
      <div className="bg-white p-5 rounded customer-card-container">
        <div className="pb-10">
          <q>{quote}</q>
        </div>
        <div className="flex">
          <div className="pr-4">
            <img
              src={profileImage}
              className="shrink-0 h-12 w-12 rounded-full"
            />
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
