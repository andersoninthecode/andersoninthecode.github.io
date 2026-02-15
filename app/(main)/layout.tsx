import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[calc(100vh-80px)]">
                {children}
            </main>
            <Footer />
        </>
    );
}
