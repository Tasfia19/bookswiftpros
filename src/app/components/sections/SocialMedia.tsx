import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const socials = [
  { icon: FaFacebookF, link: 'https://facebook.com' },
  { icon: FaInstagram, link: 'https://instagram.com' },
  { icon: FaLinkedinIn, link: 'https://linkedin.com' },
  { icon: FaTwitter, link: 'https://twitter.com' },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-3">
      {socials.map(({ icon: Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="social media link"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0c2b3a] transition hover:bg-gray-200"
        >
          <Icon size={14} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
