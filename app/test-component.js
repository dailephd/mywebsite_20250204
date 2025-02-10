export function TestComponent ({ children })
{
    return (
        <div>
            <main className="animate-fadeIn" style={{padding: '10px', backgroundColor: '#f0f0f0'}}>
                {children}
            </main>
        </div>
    );
}
