import "../styles/core-concepts.css";
import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./core-concept";


export function CoreConcepts() {
	return (
		<section id="core-concepts">
            <h2>Core Concepts</h2>

            <ul>
                { CORE_CONCEPTS.map(concept => <CoreConcept {...concept} key={concept.title} />) }
            </ul>
		</section>
	);
}