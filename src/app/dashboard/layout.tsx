export default function HomeLayout({
    children,
    modal
}: {
    children: React.ReactNode;
    modal: React.ReactNode; 
}) {
    return (
        <div className="relativew-screen h-screen">
            {children}
            {modal}
            
        </div>
        
    )
}