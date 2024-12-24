import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEDxCUSAT'24",
  description: "Come join us for an inspiring day of talks and presentations by thought leaders and innovators from various fields. Experience the power of ideas worth spreading, network with like-minded individuals, and be a part of a global community striving for positive change.",
  keywords: [
    "TEDx",
    "CUSAT",
    "conference",
    "ideas",
    "inspiration",
    "networking",
    "innovation",
    "thought leaders",
    "global community",
    "positive change",
    "technology",
    "entertainment",
    "design",
    "education",
    "science",
    "entrepreneurship",
    "creativity",
    "motivation",
    "leadership",
    "future",
    "speakers",
    "event",
    "tedxcusat",
    "tedcusat",
    "texcusat",
    "ted x cusat",
    "ted cusat",
    "tedx conference",
    "ted talks",
    "ted events"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tedxcusat.in",
    site_name: "TEDxCUSAT 24",
    title: "TEDxCUSAT 24",
    description: "Come join us for an inspiring day of talks and presentations by thought leaders and innovators from various fields. Experience the power of ideas worth spreading, network with like-minded individuals, and be a part of a global community striving for positive change.",
    images: [
      {
        url: "https://tedxcusat.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TEDxCUSAT 24"
      }
    ]
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <script
        dangerouslySetInnerHTML={{
          __html: `history.scrollRestoration = "manual"`,
        }}
      />
      </head>
      <body className={inter.className}>
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
        </body>
    </html>
  );
}
