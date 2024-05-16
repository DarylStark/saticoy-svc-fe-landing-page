function App() {
    return (
        <div className='flex flex-col h-screen bg-black'>
            <header className="h-20 flex items-center justify-end pr-4">
                <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded w-24 opacity-50' disabled>Login</button>
            </header>
            <div className="flex-grow flex items-center justify-center">
                <h1 className='text-6xl text-orange-400'>Saticoy</h1>
            </div>
            <footer className="h-20"></footer>
        </div>
    )
}

export default App
