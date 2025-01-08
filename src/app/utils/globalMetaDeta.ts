import { Metadata } from "next";

export const globalMetaData: Metadata = {
    title: "Openlly - Open yourself",
    description: "Openlly lets you post questions to your social media story and receive anonymous answers from your followers.",
    icons: {
      icon: "favicon.ico",
    },
    openGraph: {
      title: "Openlly - Ask Questions Anonymously",
      description: "Openlly lets you post questions to your social media story and receive anonymous answers from your followers.",
      url: "https://openlly.netlify.app/",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=2940",
          width: 800,
          height: 600,
          alt: "Openlly Preview Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Openlly - Ask Questions Anonymously",
      description: "Post questions to your social media story and receive anonymous answers from your followers with Openlly.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=2940",
          alt: "Openlly Preview Image",
        },
      ],
    },
}