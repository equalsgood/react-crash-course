import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
            <Card onClick={(num) => console.log('clicked')} width="200px" height="200px" variant={CardVariant.outlined}>
                <button>button</button>
            </Card>
        </div>
    );
};

export default App;