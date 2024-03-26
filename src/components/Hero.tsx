import hero from "../assets/hero.png";
export default function Hero() {
  return (
    <div>
      <img className="w-full max-h-[600px] object-cover" src={hero} />
    </div>
  );
}
