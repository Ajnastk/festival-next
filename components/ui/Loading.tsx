export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-emerald-800 font-medium">
          Loading Onam Collection...
        </p>
      </div>
    </div>
  );
}