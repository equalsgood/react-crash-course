import {useState} from "react";

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import {CORE_CONCEPTS, EXAMPLES} from './data';

const buttonsData = ['Components', 'JSX', 'Props', 'State'];

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function clickHandler(clickedButton) {
        setSelectedTopic(clickedButton)
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(el => <CoreConcept key={`core-concept-${el.title}`} {...el}/>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {buttonsData.map(el =>
                            <TabButton
                                key={`menu-button-${el}`}
                                onClick={() => clickHandler(el.toLowerCase())}
                                active={selectedTopic === el.toLowerCase()}
                            >{el}</TabButton>
                        )}
                    </menu>
                    <div id="tab-content">
                        {selectedTopic ?
                            <>
                                <h3>{EXAMPLES[selectedTopic].title}</h3>
                                <p>{EXAMPLES[selectedTopic].description}</p>
                                <pre>
                                    <code>{EXAMPLES[selectedTopic].code}</code>
                                </pre>
                            </>
                            :
                            <p>Please select a topic</p>
                        }
                    </div>
                </section>
            </main>
        </div>
    )
        ;
}

export default App;
