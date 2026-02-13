import imgImage23 from "../assets/IMG_9470.PNG";

function Divider() {
  return (
    <div className="absolute h-[1223px] left-0 top-0 w-[1440px]" data-name="Divider">
      <div className="absolute inset-[-4.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1325">
          <g id="Divider" opacity="0.6">
            <line id="Line 2" stroke="var(--stroke-0, #D4D4D4)" strokeDasharray="6 6" strokeLinecap="round" x1="120.5" x2="120.5" y1="0.5" y2="1324.5" />
            <line id="Line 3" stroke="var(--stroke-0, #D4D4D4)" strokeDasharray="6 6" strokeLinecap="round" x1="420.5" x2="420.5" y1="0.5" y2="1324.5" />
            <line id="Line 5" stroke="var(--stroke-0, #D4D4D4)" strokeDasharray="6 6" strokeLinecap="round" x1="720.5" x2="720.5" y1="0.5" y2="1324.5" />
            <line id="Line 6" stroke="var(--stroke-0, #D4D4D4)" strokeDasharray="6 6" strokeLinecap="round" x1="1020.5" x2="1020.5" y1="0.5" y2="1324.5" />
            <line id="Line 8" stroke="var(--stroke-0, #D4D4D4)" strokeDasharray="6 6" strokeLinecap="round" x1="1320.5" x2="1320.5" y1="0.5" y2="1324.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Landing page">
      <Divider />
      <div className="absolute bg-white blur-[75px] h-[499px] left-[-8px] top-[1052px] w-[1448px]" data-name="Discover" />
      <div className="absolute h-[7772px] left-0 top-0 w-[1440px]" data-name="image 23">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage23} />
      </div>
    </div>
  );
}