import { MediaPeso } from "../components/media-peso";
import { MediaSimples } from "../components/media-simples";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[--bg-color]">
      <div>
        <MediaSimples />
      </div>
      <div>
        <MediaPeso />
      </div>
    </div>
  );
}
