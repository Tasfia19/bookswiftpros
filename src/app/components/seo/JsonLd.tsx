export default function JsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "AccountingService",
		name: "BookSwiftPros",
		url: "https://bookswiftpros.com",
		description: "Professional bookkeeping services.",
		address: {
			"@type": "PostalAddress",
			addressCountry: "US",
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
