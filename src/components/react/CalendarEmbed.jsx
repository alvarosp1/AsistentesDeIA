import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"reunion-de-1-hora"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#04070F"}},"hideEventTypeDetails":false,"layout":"month_view"});
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
