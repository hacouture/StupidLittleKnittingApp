Vite
npm run dev

Props

-   attributes of the component passed to the component function

`<CrochetStitch stitchType="single-crochet" stitchName="Single Crochet" stitchAbbreviation="sc" stitches="1" />`

````const CrochetStitch = (props) => {
    const { stitchType } = props;
    const stitchClass = `crochet-stitch ${stitchType}`;

    const { stitches } = props;

    return (
        <div className={stitchClass}>
            {props.stitchName} <br /> ({props.stitchAbbreviation})
        </div>
    );

};
export default CrochetStitch;```

WebP

-   more efficient file format form Google
````

I am not really sure how he got the API data to the app...they are magically there as props. Will worry about that later.

NEXT >>>

## Hooks

React Hooks are functions that let you use React features, like state and lifecycle methods, inside functional components. They were introduced in React 16.8 to allow functional components to have state and side effects without needing class components.

-   useState
-   useEffect
-   useContext
-   etc.

Need to be run in the exact same order

"Side effects" ?

Don't keep track of state outside of react e.g. in variables in your code
AKA statefulness inside of your react components
? How

Cannot be called/set inside conditionals, loops
Needs to be in the exact same order

How to keep track of stitch count at the parent?
Import a common file?

useEffect Hook
don't use with promise
EG want to run code only on the first time
