import React from 'react';
interface ServiceCardProps {
  title: string;
  subtitle: string;
  items: string[];
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  items,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 font-medium text-gray-800">{subtitle}</p>
        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 text-gray-600">
              <span className="mt-1 h-5 w-5 rounded border border-gray-300"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
