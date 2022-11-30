import { Link } from 'react-router-dom';
import heroimg from '../../../Assets/home/heroimg.png';



const Hero = () => {
    return (
        <section className=" ">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Used Cars at the Best Prices
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Find the best deals on cars from the trusted dealers and sellers. Resale Nest has the largest collection of used cars from top brand.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to="#" className="px-8 py-3 text-lg font-semibold border rounded border-primary text-primary hover:bg-secondary hover:text-white ">Browse Cars</Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center p-6 mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={heroimg} alt="" className="object-contain  sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;