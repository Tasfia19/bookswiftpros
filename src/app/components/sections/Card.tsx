import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-[480px] h-[500px] items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-2xl">
      <Image src={icon} alt={title} width={96} height={96} className="mb-4" />

      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
