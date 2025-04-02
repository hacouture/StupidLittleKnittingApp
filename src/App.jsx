import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import DB from './Data';
import CrochetStitch from './CrochetStitch';

// clear button
// new project, clear project
// add a round

// Things to learn
// React
// ES6
// DBs
// Tailwind
// Other CSS esp animations / fun interactions
// Git stuff
// Accessibility

const App = () => {
    // TEMP interface with local storage until have a DB set up
    // let data = DB.initDB();

    // const [stitchCount, setStitchCount] = useState(0);

    return (
        <div>
            <h1 className="logo">Stupid Little Knitting App</h1>
            <ul className="rounds-tracker">
                <li>
                    Round 1
                    <ul className="rounds-stitches-tracker">
                        <li>Stitch 1</li>
                    </ul>
                </li>
            </ul>
            <button>Add Round</button>
            {/* TODO grab this from a data store or at least a json file */}
            <div className="stitch-wrapper">
                <CrochetStitch stitchType="single-crochet" stitchName="Single Crochet" stitchAbbreviation="sc" addStitches="1" />
                <CrochetStitch stitchType="increase" stitchName="Increase" stitchAbbreviation="inc" addStitches="2" />
                <CrochetStitch stitchType="decrease" stitchName="Decrease" stitchAbbreviation="dec" addStitches="-1" />
                <CrochetStitch stitchType="slip-stitch" stitchName="Slip Stitch" stitchAbbreviation="sl" addStitches="1" />
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
