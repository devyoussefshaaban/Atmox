export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-600 border-t-blue-400 rounded-full animate-spin" />
                <p className="text-gray-300 text-sm tracking-wide">Loading...</p>
            </div>
        </div>
    );
}
