"use client";

import { useEffect, useRef } from "react";

export default function DeveloperFootprint() {
  const printed = useRef(false);

  useEffect(() => {
    if (printed.current) return;
    printed.current = true;

    const asciiArt = `
  •••   ••   •••   •   •   ••   •••  ••••
  •  • •  •  •  •  •• ••  •  •  •  • •   
  •••  ••••  •  •  • • •  •  •  •••  ••• 
  •    •  •  •  •  •   •  •  •  •  • •   
  •    •  •  •••   •   •   ••   •  • ••••

       ••   •  •  •••  •  •  ••••
      •  •  •• •   •   •• •  •   
      ••••  • ••   •   • ••  • ••
      •  •  •  •   •   •  •  •  •
      •  •  •  •  •••  •  •  ••••
`;

    console.log(
      `%c${asciiArt}`,
      "color: #38bdf8; font-family: monospace; font-size: 11px; font-weight: bold; line-height: 1.25;"
    );

    console.log(
      "%c Crafted by %c Padmore Aning ",
      "background: #262626; color: #d4d4d8; padding: 4px 7px; border-radius: 3px 0 0 3px; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 500;",
      "background: #3f3f46; color: #ffffff; padding: 4px 8px; border-radius: 0 3px 3px 0; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 700;"
    );

    console.log(
      "%chttps://padmoreaning.com/",
      "color: #60a5fa; text-decoration: underline; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 2px 0;"
    );

    console.log(
      "\nPortfolio:  https://padmoreaning.com/\nContact:    hello@padmoreaning.com\n\n[ATTRIBUTION NOTE]\nPadmore Aning crafted and engineered this website platform.\nThe WACREN CLI-MET programme is supported by the AfricaConnect project, co-funded by the European Union through the Global Gateway programme, and managed by WACREN."
    );
  }, []);

  return null;
}
