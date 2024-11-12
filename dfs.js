function depthFirstSearch(graph, source) {
    const set = new Set()
    for (const vertex in graph) {
        if (!set.has(vertex)) {
            dfs(vertex, set)
        }
    }

    return set
}

function dfs(v, set) {
    set.add(v)
    for (const adjV in object) {
        if (!set.has(adjV)) {
            set.add(adjV)
        }
    }
}
