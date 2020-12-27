function profileWriter(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
) {

    // console.log(id);
    // console.log(phase);
    // console.log(actualDuration);
    // console.log(baseDuration);
    // console.log(startTime);
    // console.log(commitTime);
    console.log(`${id} has ${phase === "mount" ? "mounted" : "updated"}, actualDuration: ${actualDuration}ms, baseDuration: ${baseDuration}ms, startTime: ${startTime}ms, commitTime: ${commitTime}ms`)
    console.log(interactions);
}

export default profileWriter;