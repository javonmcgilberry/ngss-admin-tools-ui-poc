import './App.css';

function App() {
    return (
        <div className="flex">
            <aside className="border-box h-screen w-1/5 min-w-[400px] bg-blue-grey-600 p-10">
                <h1 className="text-4xl text-white">Sidebar</h1>
            </aside>
            <main className="h-screen flex-1 overflow-scroll">
                <div className="h-96 bg-amber-400 p-10">
                    <h1 className="text-4xl">Top Content</h1>
                </div>
                <div className="h-96 bg-white p-10">
                    <h1 className="text-4xl">Middle Content</h1>
                </div>
                <div className="h-96 bg-green-400 p-10">
                    <h1 className="text-4xl">Middle Content</h1>
                </div>
                <div className="h-96 bg-indigo-400 p-10">
                    <h1 className="text-4xl">Last Content</h1>
                </div>
            </main>
        </div>
    );
}
export default App;
