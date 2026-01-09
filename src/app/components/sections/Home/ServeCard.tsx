import Image from 'next/image';

interface ServeCardProps {
  icon: string;
  title: string;
  description: string;
}
const ServeCard: React.FC<ServeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex h-[310px] w-[414px] flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-2xl">
      <Image src={icon} alt={title} width={96} height={96} className="mb-4" />

      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default ServeCard;
