import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://bookswiftpros.com",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: "https://bookswiftpros.com/services",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		// Add dynamic blog posts/pages here later
	];
}
