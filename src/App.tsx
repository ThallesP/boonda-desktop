import './globals.css';
import { UploadComponent } from './components/upload-component';
import { TanStackQueryProvider } from './providers/tanstack-query-provider';

function App() {
  return (
    <TanStackQueryProvider>
      <div className="bg-zinc-950 h-screen flex justify-center items-center">
        <div className="flex flex-col gap-16">
          <UploadComponent />
          {/* <UnlockHigherLimits /> */}
        </div>
      </div>
    </TanStackQueryProvider>
  );
}

export default App;
