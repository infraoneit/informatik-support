"use client";

import { useLanguage } from "./LanguageContext";
import Script from "next/script";

export default function StructuredData() {
    const { t } = useLanguage();

    // Helper to get questions for FAQ schema
    const faqItems = t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    }));

    // Schema: LocalBusiness
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://informatik-support.ch/#localbusiness",
        name: "InfraOne IT Solutions GmbH",
        image: "https://informatik-support.ch/infraone-logo-weiss.svg", // Fallback/Actual logo URL
        telephone: "+41 52 222 18 18",
        url: "https://informatik-support.ch",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Rudolf-Diesel-Strasse 25",
            addressLocality: "Winterthur",
            postalCode: "8404",
            addressCountry: "CH",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 47.4975, // approx Winterthur
            longitude: 8.7565,
        },
        areaServed: ["Zürich", "Winterthur", "Schaffhausen", "Thurgau", "St. Gallen", "Deutschschweiz"],
        priceRange: "CHF 130–200",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
                description: "Normaltarif",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "17:00",
                closes: "23:00",
                description: "Abendzuschlag",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday", "PublicHolidays"],
                opens: "08:00",
                closes: "23:00",
                description: "Wochenendzuschlag",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "23:00",
                closes: "08:00",
                description: "SLA Only",
            },
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+41 52 222 18 18",
                contactType: "customer support",
                areaServed: "CH",
                availableLanguage: ["German", "English"],
            },
            {
                "@type": "ContactPoint",
                telephone: "+41 76 587 50 55",
                contactType: "emergency",
                areaServed: "CH",
                availableLanguage: ["German"],
            },
        ],
    };

    // Schema: Services & Offers
    const servicesSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IT Support",
            provider: { "@type": "LocalBusiness", name: "InfraOne IT Solutions GmbH" },
            offers: {
                "@type": "Offer",
                price: "130",
                priceCurrency: "CHF",
                availability: "https://schema.org/InStock",
                areaServed: "Schweiz",
                itemOffered: { "@type": "Service", name: "Phone & Remote Support" }
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Computerhilfe",
            provider: { "@type": "LocalBusiness", name: "InfraOne IT Solutions GmbH" },
            offers: {
                "@type": "Offer",
                price: "145",
                priceCurrency: "CHF",
                availability: "https://schema.org/InStock",
                areaServed: "Schweiz",
                itemOffered: { "@type": "Service", name: "Vor-Ort Support (Privat)" }
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Remote Support",
            provider: { "@type": "LocalBusiness", name: "InfraOne IT Solutions GmbH" },
            offers: {
                "@type": "Offer",
                price: "167",
                priceCurrency: "CHF",
                availability: "https://schema.org/InStock",
                areaServed: "Schweiz",
                itemOffered: { "@type": "Service", name: "Vor-Ort Support (KMU)" }
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "IT Notfalldienst",
            provider: { "@type": "LocalBusiness", name: "InfraOne IT Solutions GmbH" },
            offers: {
                "@type": "Offer",
                price: "200",
                priceCurrency: "CHF",
                availability: "https://schema.org/InStock",
                areaServed: "Schweiz",
                itemOffered: { "@type": "Service", name: "Schulung & Beratung" }
            }
        }
    ];

    // Schema: FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems,
    };

    return (
        <>
            <Script
                id="schema-localbusiness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="schema-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {servicesSchema.map((schema, index) => (
                <Script
                    key={index}
                    id={`schema-service-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
