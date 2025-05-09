import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"reunion-de-1-hora"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#04070F"}},"hideEventTypeDetails":false,"layout":"month_view"});

      // Add event listener for booking successful
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          console.log("Booking successful", e.detail);
          // Report conversion to Google Ads when a booking is created
          if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
            window.gtag_report_conversion();
          }
        },
      });
    })();
  }, []);

  return (
    <div style={{ height: "600px" }}>
      <Cal
        namespace="reunion-de-1-hora"
        calLink="asistentesdeia/reunion-de-1-hora"
        style={{width:"100%", height:"100%", overflow:"scroll"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
}
