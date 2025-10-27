const Feature = () => { 
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                        <p className="text-gray-600">Description of feature 1.</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                        <p className="text-gray-600">Description of feature 2.</p>
                    </div>
                    <div className="border p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                        <p className="text-gray-600">Description of feature 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;