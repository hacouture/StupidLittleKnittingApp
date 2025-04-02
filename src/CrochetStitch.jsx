import { useState } from 'react';

const CrochetStitch = (props) => {
    const { stitches } = props;
    const { stitchType } = props;
    const stitchClass = `crochet-stitch ${stitchType}`;

    // default is first type
    // state is only for THIS component...need a way to bubble up
    const [stitchCount, setStitchCount] = useState(0);

    return (
        <div
            className={stitchClass}
            data-stitchtype={stitchType}
            data-addstitches={props.addStitches}
            onClick={(e) => {
                const stitchType = e.currentTarget.dataset.stitchtype;
                const stitchEquivalent = parseInt(e.currentTarget.dataset.addstitches);
                console.log('stitch eq', stitchEquivalent);

                setStitchCount(stitchCount + stitchEquivalent);
                console.log('state', stitchCount);

                // get the active round from state
                // add one to it

                // add one of stitch type to current active round
                // (later on click and hold add multipel stiches)
                // on click add to state
                // then stich display would read from state
            }}
        >
            {props.stitchName} <br /> ({props.stitchAbbreviation})
        </div>
    );
};

export default CrochetStitch;
