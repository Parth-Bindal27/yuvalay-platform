export default function DroneHUD() {
  return (
    <div className="droneHUD">

      <div className="hudFrame">

        <div className="hudCorner topLeft" />
        <div className="hudCorner topRight" />
        <div className="hudCorner bottomLeft" />
        <div className="hudCorner bottomRight" />

        <div className="crosshair">

          <div className="crossVertical" />

          <div className="crossHorizontal" />

          <div className="crossCircle" />

        </div>

        <div className="scanLine" />

        <div className="hudLeft">

          <span>DRONE LINK</span>

          <span>GPS LOCK</span>

          <span>ALT : 128m</span>

          <span>SPD : 12m/s</span>

        </div>

        <div className="hudRight">

          <span>AI ACTIVE</span>

          <span>ZOOM ×320</span>

          <span>TRACKING</span>

          <span>YUVALAY</span>

        </div>

      </div>

    </div>
  );
}