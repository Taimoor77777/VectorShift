import { useStore } from "./store";

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {

        try {

            const response = await fetch(
                "http://localhost:8000/pipelines/parse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nodes,
                        edges,
                    }),
                }
            );

            const result = await response.json();

            alert(
`Pipeline Analysis

Number of Nodes: ${result.num_nodes}

Number of Edges: ${result.num_edges}

Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`
            );

        } catch (err) {

            console.error(err);

            alert("Failed to connect to backend.");
        }
    };

    return (
        <button
            type="button"
            className="submit-btn"
            onClick={handleSubmit}
        >
            Submit
        </button>
    );
};