import "./globals.css";
import { UploadComponent } from "./components/upload-component";
import { TanStackQueryProvider } from "./providers/tanstack-query-provider";
import { X } from "lucide-react";
import { appWindow } from "@tauri-apps/api/window";
function App() {
  return (
    <TanStackQueryProvider>
      <div className="bg-zinc-950 flex absolute justify-end items-center w-full">
        <button
          className="text-zinc-700 flex flex-row-reverse"
          onClick={() => appWindow.hide()}
        >
          <X size={24} />
        </button>
      </div>
      <div className="bg-zinc-950 h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-16 w-full">
          <UploadComponent />
        </div>
      </div>
    </TanStackQueryProvider>
  );
}

export default App;
