import portfolioVideoWebsite from "./portfolioVideo2.mp4";

export default function PortfolioVideo2() {
  return (
    <div className="mov-vid">
      <video
        id="website video"
        loop
        autoPlay
        muted
        width="950"
        height="500"
        src={portfolioVideoWebsite}
        type="video/mp4"
      />
    </div>
  );
}
