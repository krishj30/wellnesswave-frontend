import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<footer className="bg-black text-white py-8 mt-44"> {/* Add margin-top */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 ">
                {/* About Us Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-400">
                        This website is lovingly managed to provide resources and support for mental health and well-being.
                    </p>
                </div>

                {/* Understanding Mental Health Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Understanding mental health</h2>
                    <ul className="space-y-5">
                        <li><Link to="/Relationship" className="hover:underline">Relationships</Link></li>
                        <li><Link to="/self-tests" className="hover:underline">Self-tests</Link></li>
                        <li><Link to="/depression" className="hover:underline">Understanding depression</Link></li>
                        <li><Link to="/work" className="hover:underline">Work</Link></li>
                        <li><Link to="/alcohol-drugs" className="hover:underline">Alcohol and drugs</Link></li>
                    </ul>
                </div>

                {/* Seeking Support Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Seeking support</h2>
                    <ul className="space-y-5">
                        <li><Link to="/support" className="hover:underline">People who can help</Link></li>
                        <li><Link to="/treatment" className="hover:underline">Types of treatment</Link></li>
                    </ul>
                </div>

                {/* Staying Well Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Staying well</h2>
                    <ul className="space-y-5">
                        <li><Link to="/self-care" className="hover:underline">Taking care</Link></li>
                        <li><Link to="/stories" className="hover:underline">Stories from others</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
