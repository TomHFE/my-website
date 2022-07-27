import portfolioVideoFirst from "./portfoliovideo.mp4";

export default function PortfolioVideo() {
  return (
    <div className="mov-vid">
      <video
        id="movie-app video"
        loop
        autoPlay
        muted
        width="950"
        height="500"
        src={portfolioVideoFirst}
        type="video/mp4"
      />
    </div>
  );
}
