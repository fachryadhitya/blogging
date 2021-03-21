export default function DetailNews({ data }) {
  console.log(data);
  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      <span className="font-serif font-bold">{data.Date}</span>
      <h1 className="font-serif text-3xl lg:text-4xl leading-7 mb-5 mt-4">
        {data.title}
      </h1>
      <p className="font-sans text-lg lg:text-xl leading-8">{data.paragraph}</p>
    </div>
  );
}
