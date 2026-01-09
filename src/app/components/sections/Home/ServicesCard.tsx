import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const ServicesCard: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex h-[500px] w-[480px] flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-2xl">
      <div className="mb-6 flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#0B5079]">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>

      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesCard;