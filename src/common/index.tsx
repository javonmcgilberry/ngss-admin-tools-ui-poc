import Header from '../components/header/Header';

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-screen w-full max-w-[70vw] overflow-scroll bg-main-content px-6 py-10">
            <Header />
            {children}
        </main>
    );
};
