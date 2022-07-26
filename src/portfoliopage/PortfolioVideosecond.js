import portfolioVideoWebsite from "./portfoliovideosecond.mp4";

export default function PortfolioVideosecond() {
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
