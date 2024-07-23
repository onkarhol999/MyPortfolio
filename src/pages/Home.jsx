import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Isleand from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomaInfo from '../components/HomaInfo'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0]); // Define islandRotation state

    // Adjust the screen size detection on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];

        if (window.innerWidth > 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, islandRotation];
    }

    const adjustPlanForScreenSize = () => {
        let screenScale;
        let screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlanForScreenSize();

    // Rotation functions
    const rotateIslandClockwise = () => {
        setIslandRotation(prevRotation => [prevRotation[0], prevRotation[1] + 0.1, prevRotation[2]]);
    };

    const rotateIslandCounterclockwise = () => {
        setIslandRotation(prevRotation => [prevRotation[0], prevRotation[1] - 0.1, prevRotation[2]]);
    };

    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomaInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Isleand
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
            {/* Buttons for mobile view */}
            {isMobile && (
                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-4'>
                    <button
                        className='bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform'
                        onClick={rotateIslandClockwise}
                       
                    >
                        Rotate Left
                    </button>
                    <button
                        className='bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform'
                        onClick={rotateIslandCounterclockwise}
                    
                    >
                        Rotate Right
                    </button>
                </div>
            )}
        </section>
    )
}

export default Home
