import "./globals.css";
import { UploadComponent } from "./components/upload-component";
import { TanStackQueryProvider } from "./providers/tanstack-query-provider";
import { X } from "lucide-react";
import { appWindow } from "@tauri-apps/api/window";
function App() {
  return (
    <TanStackQueryProvider>
      <button
        className="bg-zinc-950 text-zinc-700 w-full absolute flex flex-row-reverse"
        onClick={() => appWindow.hide()}
      >
        <X size={24} />
      </button>
      <div className="bg-zinc-950 h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-16 w-full">
          <UploadComponent />
        </div>
      </div>
    </TanStackQueryProvider>
  );
}

export default App;
