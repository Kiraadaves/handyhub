
export default function Back({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex flex-col min-h-screen">
          
      <div className="flex-grow">{children}</div>
    </div>
  );
}
